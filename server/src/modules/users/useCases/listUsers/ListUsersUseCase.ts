import { inject, injectable } from "tsyringe";

import { IUsersRepository } from "../../repository/IUsersRepository";

@injectable()
class ListUsersUseCase {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ) {}
    async execute() {
        const users = await this.usersRepository.listUsers();

        return users;
    }
}

export { ListUsersUseCase };
