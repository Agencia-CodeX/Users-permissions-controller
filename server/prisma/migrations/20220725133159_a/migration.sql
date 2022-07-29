/*
  Warnings:

  - Made the column `usersId_user` on table `userRole` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "userRole" ALTER COLUMN "usersId_user" SET NOT NULL;
