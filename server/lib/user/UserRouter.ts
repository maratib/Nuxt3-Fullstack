import express from "express";
import { UserService } from "./UserService";
const router = express.Router();
const userService = new UserService();

router.get("/", async (req, res) => {
  const users = await userService.findAll();
  res.json(users);
});

export default router;
