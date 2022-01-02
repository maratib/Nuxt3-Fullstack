import type { IncomingMessage, ServerResponse } from "http";
import { UserService } from "~~/server/lib/services/UserService";

export default async (req, res: ServerResponse) => {
  // console.log(req.body);
  // console.log(req.method);

  const userService = new UserService();
  const users = await userService.findAll();
  //   console.log(users);

  return users;
};
