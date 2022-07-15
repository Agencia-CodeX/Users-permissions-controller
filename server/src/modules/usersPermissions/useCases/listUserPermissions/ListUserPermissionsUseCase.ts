import { inject, injectable } from "tsyringe";

import { IUsersPermissionsRepository } from "../../repository/IUsersPermissionsRepository";

@injectable()
class ListUserPermissionsUseCase {
    constructor(
        @inject("UsersPermissionsRepository")
        private usersPermissionsRepository: IUsersPermissionsRepository
    ) {}
    async execute(id_user: string) {
        const userPermissions = await this.usersPermissionsRepository.list(
            id_user
        );

        return userPermissions;
    }
}

export { ListUserPermissionsUseCase };
