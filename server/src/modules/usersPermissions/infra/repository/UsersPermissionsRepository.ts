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
}

export { UsersPermissionsRepository };
