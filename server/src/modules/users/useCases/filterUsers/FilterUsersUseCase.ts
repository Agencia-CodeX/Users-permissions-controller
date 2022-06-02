import { inject, injectable } from "tsyringe";

import { IUsersRepository } from "../../repository/IUsersRepository";

@injectable()
class FilterUsersUseCase {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ) {}
    async execute(email?: string, name?: string) {
        const users = await this.usersRepository.filter(email, name);

        return users;
    }
}

export { FilterUsersUseCase };
