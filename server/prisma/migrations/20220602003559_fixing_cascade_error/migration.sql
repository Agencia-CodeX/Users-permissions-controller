/*
  Warnings:

  - Made the column `usersId_user` on table `userRole` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "userRole" DROP CONSTRAINT "userRole_usersId_user_fkey";

-- DropForeignKey
ALTER TABLE "usersTokens" DROP CONSTRAINT "usersTokens_usersId_user_fkey";

-- AlterTable
ALTER TABLE "permissions" ALTER COLUMN "role" SET DEFAULT E'USER';

-- AlterTable
ALTER TABLE "userRole" ALTER COLUMN "usersId_user" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "userRole" ADD CONSTRAINT "userRole_usersId_user_fkey" FOREIGN KEY ("usersId_user") REFERENCES "users"("id_user") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "usersTokens" ADD CONSTRAINT "usersTokens_usersId_user_fkey" FOREIGN KEY ("usersId_user") REFERENCES "users"("id_user") ON DELETE CASCADE ON UPDATE CASCADE;
