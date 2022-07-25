import { inject, injectable } from "tsyringe";

import { IUsersPermissionsRepository } from "../../repository/IUsersPermissionsRepository";

@injectable()
class DeleteUserPermissionUseCase {
    constructor(
        @inject("UsersPermissionsRepository")
        private usersPermissionsRepository: IUsersPermissionsRepository
    ) {}

    async execute(id_user_role: string) {
        const deleteUserPermission =
            await this.usersPermissionsRepository.delete(id_user_role);

        return deleteUserPermission;
    }
}

export { DeleteUserPermissionUseCase };
