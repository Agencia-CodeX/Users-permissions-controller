import { inject, injectable } from "tsyringe";

import { IUsersRepository } from "../../repository/IUsersRepository";

interface IRequest {
    name: string;
    id_user: string;
}

@injectable()
class UpdateUserUseCase {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ) {}
    async execute({ id_user, name }: IRequest) {
        const userUpdated = await this.usersRepository.update({
            id_user,
            name,
        });

        return userUpdated;
    }
}

export { UpdateUserUseCase };
