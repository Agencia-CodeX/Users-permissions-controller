import { prisma } from "src/prisma";

import { Permissions } from "@prisma/client";

import { ICreatePermissionsDTO } from "../../dtos/ICreatePermissionsDTO";
import { IPermissionsRepository } from "../../repository/IPermissionsRepository";

class PermissionsRepository implements IPermissionsRepository {
    async create({ role }: ICreatePermissionsDTO): Promise<Permissions> {
        const permission = await prisma.permissions.create({
            data: {
                role,
            },
        });

        return permission;
    }

    async updateName(
        name: string,
        id_permission: number
    ): Promise<Permissions> {
        const permission = await prisma.permissions.update({
            data: {
                role: name,
            },
            where: {
                id_permission,
            },
        });

        return permission;
    }

    async list(): Promise<Permissions[]> {
        const permissions = await prisma.permissions.findMany();

        return permissions;
    }
}

export { PermissionsRepository };
