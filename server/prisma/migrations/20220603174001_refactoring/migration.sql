/*
  Warnings:

  - You are about to drop the column `permissionsId_permission` on the `users` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "users" DROP CONSTRAINT "users_permissionsId_permission_fkey";

-- AlterTable
ALTER TABLE "permissions" ALTER COLUMN "role" SET DEFAULT E'USER';

-- AlterTable
ALTER TABLE "users" DROP COLUMN "permissionsId_permission";

-- CreateTable
CREATE TABLE "userRole" (
    "id_user_role" TEXT NOT NULL,
    "usersId_user" TEXT NOT NULL,
    "permissionsId_permission" INTEGER NOT NULL,

    CONSTRAINT "userRole_pkey" PRIMARY KEY ("id_user_role")
);

-- AddForeignKey
ALTER TABLE "userRole" ADD CONSTRAINT "userRole_usersId_user_fkey" FOREIGN KEY ("usersId_user") REFERENCES "users"("id_user") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "userRole" ADD CONSTRAINT "userRole_permissionsId_permission_fkey" FOREIGN KEY ("permissionsId_permission") REFERENCES "permissions"("id_permission") ON DELETE RESTRICT ON UPDATE CASCADE;
