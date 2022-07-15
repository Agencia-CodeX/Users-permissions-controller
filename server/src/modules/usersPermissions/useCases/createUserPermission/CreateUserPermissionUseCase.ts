import { inject, injectable } from "tsyringe";

import { IUsersPermissionsRepository } from "../../repository/IUsersPermissionsRepository";

interface IRequest {
    usersId_user: string;
    permissionsId_permission: number;
}

@injectable()
class CreateUserPermissionUseCase {
    constructor(
        @inject("UsersPermissionsRepository")
        private usersPermissionsRepository: IUsersPermissionsRepository
    ) {}

    async execute({ permissionsId_permission, usersId_user }: IRequest) {
        const userPermission = await this.usersPermissionsRepository.create({
            permissionsId_permission,
            usersId_user,
        });

        return userPermission;
    }
}

export { CreateUserPermissionUseCase };
