import { prisma } from "src/prisma";

import { userRole } from "@prisma/client";

import { ICreateUsersPermissionsDTO } from "../../dtos/ICreateUsersPermissionsDTO";
import { IUsersPermissionsRepository } from "../../repository/IUsersPermissionsRepository";

class UsersPermissionsRepository implements IUsersPermissionsRepository {
    async create({
        permissionsId_permission,
        usersId_user,
    }: ICreateUsersPermissionsDTO): Promise<userRole> {
        const userPermission = await prisma.userRole.create({
            data: {
                permissionsId_permission,
                usersId_user,
            },
        });

        return userPermission;
    }

    async list(id_user: string): Promise<userRole[]> {
        const userPermissions = await prisma.userRole.findMany({
            where: {
                usersId_user: id_user,
            },
        });

        return userPermissions;
    }
}

export { UsersPermissionsRepository };
