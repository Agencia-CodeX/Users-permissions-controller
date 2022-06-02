import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
    log: ["query"],
});

async function seedPermissions() {
    await prisma.permissions.create({
        data: {
            role: "Supervisor",
        },
    });

    await prisma.permissions.create({
        data: {
            role: "Administração",
        },
    });

    await prisma.permissions.create({
        data: {
            role: "TI",
        },
    });

    await prisma.permissions.create({
        data: {
            role: "Manutenção",
        },
    });

    await prisma.permissions.create({
        data: {
            role: "DP",
        },
    });

    await prisma.permissions.create({
        data: {
            role: "Financeiro",
        },
    });
}
seedPermissions();
