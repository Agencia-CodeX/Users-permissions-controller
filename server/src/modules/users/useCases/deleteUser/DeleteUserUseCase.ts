import { inject, injectable } from "tsyringe";

import { IUsersRepository } from "../../repository/IUsersRepository";

@injectable()
class DeleteUserUseCase {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ) {}
    async execute(idDelete: string) {
        await this.usersRepository.delete(idDelete);
    }
}

export { DeleteUserUseCase };
