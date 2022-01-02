import express from "express";
// import api from "../api";
import UserRouter from "./user/UserRouter";
const app = express();

app.use(express.json());
app.use("/user", UserRouter);

app.get("/", (req, res) => {
  const { email } = req.body;
  console.log(email);

  res.json({
    message: "Not found",
  });
});

console.log("Express server is started");

export default app;
