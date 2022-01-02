// import { PrismaClient } from "@prisma/client";

// let prisma = new PrismaClient();

// export default prisma;

import Prisma from "@prisma/client";
const { PrismaClient } = Prisma;
// add prisma to the NodeJS global type
interface CustomNodeJsGlobal extends NodeJS.Global {
  __db: Prisma.PrismaClient;
}

// Prevent multiple instances of Prisma Client in development
declare const global: CustomNodeJsGlobal;

const db = global.__db || new PrismaClient();

if (process.env.NODE_ENV === "development") global.__db = db;

export { db };
