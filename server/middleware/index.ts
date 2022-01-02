import type { IncomingMessage, ServerResponse } from "http";

export default async (req: IncomingMessage, res: ServerResponse) => {
  //   req.someValue = true;
  console.log("I'm running all the time from middleware");
};
