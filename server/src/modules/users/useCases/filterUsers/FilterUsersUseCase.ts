import { inject, injectable } from "tsyringe";

import { IUsersRepository } from "../../repository/IUsersRepository";

@injectable()
class FilterUsersUseCase {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ) {}
    async execute(search: string) {
        const users = await this.usersRepository.filter(search);

        return users;
    }
}

export { FilterUsersUseCase };
