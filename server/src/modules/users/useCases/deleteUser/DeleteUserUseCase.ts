import { inject, injectable } from "tsyringe";

import { IUsersRepository } from "../../repository/IUsersRepository";

@injectable()
class DeleteUserUseCase {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ) {}
    async execute(id: string) {
        const user = await this.usersRepository.delete(id);
        return user;
    }
}

export { DeleteUserUseCase };
