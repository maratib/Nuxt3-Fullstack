import type { IncomingMessage, ServerResponse } from "http";
import { UserService } from "../../lib/services/UserService";

export default async (req: IncomingMessage, res: ServerResponse) => {
  //   var body = "";
  //   req.on("readable", function () {
  //     body += req.read();
  //   });

  //   req.on("end", function () {
  //     console.log(body);
  //   });
  console.log(req.method);

  req.on("response", function (response) {
    response.on("data", function (chunk) {
      console.log("BODY: " + chunk);
    });
  });

  const userService = new UserService();
  const users = await userService.findAll();
  //   console.log(users);

  return users;
};
