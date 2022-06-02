-- DropForeignKey
ALTER TABLE "userRole" DROP CONSTRAINT "userRole_usersId_user_fkey";

-- DropForeignKey
ALTER TABLE "usersTokens" DROP CONSTRAINT "usersTokens_usersId_user_fkey";

-- AlterTable
ALTER TABLE "userRole" ALTER COLUMN "usersId_user" DROP NOT NULL;

-- AlterTable
ALTER TABLE "usersTokens" ALTER COLUMN "usersId_user" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "userRole" ADD CONSTRAINT "userRole_usersId_user_fkey" FOREIGN KEY ("usersId_user") REFERENCES "users"("id_user") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "usersTokens" ADD CONSTRAINT "usersTokens_usersId_user_fkey" FOREIGN KEY ("usersId_user") REFERENCES "users"("id_user") ON DELETE SET NULL ON UPDATE CASCADE;
