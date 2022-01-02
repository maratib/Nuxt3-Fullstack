-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'CONSULTANT', 'ADMIN');

-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "email" VARCHAR(150) NOT NULL,
    "secret" TEXT NOT NULL DEFAULT E'SGVsbG8gd29ybGQ=',
    "role" "Role" NOT NULL DEFAULT E'USER',

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");
