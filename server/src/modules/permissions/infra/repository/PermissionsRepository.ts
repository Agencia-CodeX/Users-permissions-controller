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
}

export { PermissionsRepository };
