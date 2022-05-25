-- CreateTable
CREATE TABLE "Permissions" (
    "id_permission" SERIAL NOT NULL,
    "role" TEXT NOT NULL,

    CONSTRAINT "Permissions_pkey" PRIMARY KEY ("id_permission")
);

-- CreateIndex
CREATE UNIQUE INDEX "Permissions_role_key" ON "Permissions"("role");
