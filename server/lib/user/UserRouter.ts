import express from "express";
import { useCookie } from "h3";
import jwt from "jsonwebtoken";
import { UserService } from "./UserService";
import { generateTokens, sendRefreshToken } from "../utils/jwt";
import {
  createRefreshToken,
  deleteRefreshToken,
  findRefreshToken,
} from "./auth";

const router = express.Router();
const userService = new UserService();

router.get("/", async (req, res) => {
  const response = await userService.findAll();
  res.json(response);
});
router.get("/email", async (req, res) => {
  const { email } = req.body;
  const response = await userService.findByEmail(email);
  res.json(response);
});
router.get("/id", async (req, res) => {
  console.log(req.body);
  console.log(req.query);

  const id = req.query.id;
  console.log(id);

  const ID = parseInt(id, 10);
  if (ID > 0) {
    const response = await userService.findById(ID);
    res.json(response);
  } else {
    res.json({});
  }
});

router.post("/create", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(403);
    throw new Error("Email or password is empty.");
  }
  try {
    const response = await userService.create(req.body);

    if (!response) {
      res.status(403);
      throw new Error("Invalid login credentials.");
    }
    delete response["password"];
    res.json(response);
  } catch (e) {
    res.status(403);
    throw new Error("Registration error");
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  console.log(req.body);

  if (!email || !password) {
    res.status(403);
    throw new Error("Email or password is empty.");
  }

  try {
    const user = await userService.login(email, password);
    if (!user) {
      res.status(403);
      throw new Error("Invalid login credentials.");
    }

    const { accessToken, refreshToken } = generateTokens(user);

    await createRefreshToken({
      token: refreshToken,
      userId: user["id"],
    });
    sendRefreshToken(res, refreshToken);

    // res.setHeader("Set-Cookie", ["myCookie=some-id;", "yourCookie=someId;"]);

    res.json({ accessToken });
  } catch (e) {
    console.log(e);
    res.end();
  }
});

router.post("/logout", async (req, res, next) => {
  const token = useCookie(req, "refresh_token");
  console.log(token);

  // await deleteRefreshToken(token);
  // sendRefreshToken(res, "");
  res.status(200);
  res.json({
    data: "success",
  });
});

router.post("/refresh_token", async (req, res, next) => {
  try {
    const token = useCookie(req, "refresh_token");
    if (!token) {
      res.status(401);
      throw new Error("Token missing");
    }
    let payload: any = null;
    payload = jwt.verify(token, process.env.JWT_REFRESH_SECRET!);

    const user = await userService.findById(payload.userId);

    if (!user) {
      res.status(401);
      throw new Error("Not authorized");
    }

    const savedRefreshToken = await findRefreshToken(token);

    if (!savedRefreshToken) {
      res.status(401);
      throw new Error("Not authorized.");
    }

    if (savedRefreshToken.userId !== payload.userId) {
      res.status(401);
      throw new Error("Not authorized");
    }

    const { accessToken, refreshToken } = generateTokens(user);

    await deleteRefreshToken(token);
    await createRefreshToken({ token: refreshToken, userId: payload.userId });

    sendRefreshToken(res, refreshToken);

    res.json({ accessToken });
  } catch (error) {
    if (res.statusCode === 200) {
      res.status(401);
    }
    sendRefreshToken(res, "");
    res.status(401).json({ message: error.message });
  }
});

export default router;
