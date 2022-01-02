import type { IncomingMessage, ServerResponse } from "http";
import { UserService } from "../lib/services/UserService";

export default async (req: IncomingMessage, res: ServerResponse) => {
  const userService = new UserService();
  const users = await userService.findAll();
  //   console.log(users);

  return users;
};
