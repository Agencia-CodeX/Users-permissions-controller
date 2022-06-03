-- DropForeignKey
ALTER TABLE "userRole" DROP CONSTRAINT "userRole_permissionsId_permission_fkey";

-- AddForeignKey
ALTER TABLE "userRole" ADD CONSTRAINT "userRole_permissionsId_permission_fkey" FOREIGN KEY ("permissionsId_permission") REFERENCES "permissions"("id_permission") ON DELETE CASCADE ON UPDATE CASCADE;
