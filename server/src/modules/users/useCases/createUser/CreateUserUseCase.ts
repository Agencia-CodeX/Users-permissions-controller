import { hash } from "bcryptjs";
import { AppError } from "src/shared/errors/App.error";
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
        const userAlreadyExists = await this.usersRepository.findByEmail(email);

        if (userAlreadyExists) {
            throw new AppError("User already exists!", 401);
        }

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
