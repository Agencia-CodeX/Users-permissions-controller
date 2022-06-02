/*
  Warnings:

  - You are about to drop the `userRole` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "userRole" DROP CONSTRAINT "userRole_permissionsId_permission_fkey";

-- DropForeignKey
ALTER TABLE "userRole" DROP CONSTRAINT "userRole_usersId_user_fkey";

-- AlterTable
ALTER TABLE "permissions" ALTER COLUMN "role" DROP DEFAULT;

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "permissionsId_permission" INTEGER;

-- DropTable
DROP TABLE "userRole";

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_permissionsId_permission_fkey" FOREIGN KEY ("permissionsId_permission") REFERENCES "permissions"("id_permission") ON DELETE CASCADE ON UPDATE CASCADE;
