/*
  Warnings:

  - You are about to drop the column `secret` on the `user` table. All the data in the column will be lost.
  - You are about to alter the column `email` on the `user` table. The data in that column could be lost. The data in that column will be cast from `VarChar(150)` to `VarChar(100)`.
  - Added the required column `password` to the `user` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "user" DROP COLUMN "secret",
ADD COLUMN     "password" VARCHAR(150) NOT NULL,
ALTER COLUMN "email" SET DATA TYPE VARCHAR(100);
