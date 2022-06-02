import { inject, injectable } from "tsyringe";

import { IUsersRepository } from "../../repository/IUsersRepository";

interface IRequest {
    id_role: number;
    id_user: string;
}

@injectable()
class UpdateUserRoleUseCase {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ) {}

    async execute({ id_role, id_user }: IRequest) {
        const userUpdated = await this.usersRepository.updateRole({
            id_user,
            id_role,
        });

        return userUpdated;
    }
}

export { UpdateUserRoleUseCase };
