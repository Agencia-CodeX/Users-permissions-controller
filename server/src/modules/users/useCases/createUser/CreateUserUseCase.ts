import { hash } from "bcryptjs";
import { inject, injectable } from "tsyringe";

import { IUsersRepository } from "../../repository/IUsersRepository";

interface IRequest {
    name: string;
    email: string;
    password: string;
}

@injectable()
class CreateUserUseCase {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ) {}
    async execute({ email, name, password }: IRequest) {
        const passwordHash = await hash(password, 8);
        const user = await this.usersRepository.create({
            email,
            name,
            password: passwordHash,
        });

        return user;
    }
}

export { CreateUserUseCase };
