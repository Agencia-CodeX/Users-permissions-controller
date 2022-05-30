/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "users" (
    "id_user" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "supervisor" UUID,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id_user")
);

-- CreateTable
CREATE TABLE "permissions" (
    "id_permission" SERIAL NOT NULL,
    "role" TEXT NOT NULL,

    CONSTRAINT "permissions_pkey" PRIMARY KEY ("id_permission")
);

-- CreateTable
CREATE TABLE "userRole" (
    "id_user_role" TEXT NOT NULL,
    "usersId_user" TEXT NOT NULL,
    "permissionsId_permission" INTEGER NOT NULL,

    CONSTRAINT "userRole_pkey" PRIMARY KEY ("id_user_role")
);

-- CreateTable
CREATE TABLE "usersTokens" (
    "id_token" TEXT NOT NULL,
    "refresh_token" TEXT NOT NULL,
    "usersId_user" TEXT NOT NULL,
    "expires_date" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "usersTokens_pkey" PRIMARY KEY ("id_token")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "permissions_role_key" ON "permissions"("role");

-- AddForeignKey
ALTER TABLE "userRole" ADD CONSTRAINT "userRole_usersId_user_fkey" FOREIGN KEY ("usersId_user") REFERENCES "users"("id_user") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "userRole" ADD CONSTRAINT "userRole_permissionsId_permission_fkey" FOREIGN KEY ("permissionsId_permission") REFERENCES "permissions"("id_permission") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "usersTokens" ADD CONSTRAINT "usersTokens_usersId_user_fkey" FOREIGN KEY ("usersId_user") REFERENCES "users"("id_user") ON DELETE RESTRICT ON UPDATE CASCADE;
