import express from "express";
// import api from "../api";
import UserRouter from "./user/UserRouter";
const app = express();

app.use(express.json());
app.use("/user", UserRouter);

app.get("/", (req, res) => {
  res.json({
    message: "Not found",
  });
});

console.log("Express server is started");

export default app;
