import { compare } from "bcryptjs";
import auth from "src/config/auth";
import { IDateProvider } from "src/shared/container/providers/DataProvider/IDateProvider";
import { AppError } from "src/shared/errors/App.error";
import { generateTokenAndRefreshToken } from "src/utils/generateAuth";
import { inject, injectable } from "tsyringe";

import { IUsersRepository } from "../../repository/IUsersRepository";
import { IUsersTokenRepository } from "../../repository/IUsersTokenRepository";

interface IRequest {
    email: string;
    password: string;
}

interface IResponse {
    user: {
        name: string;
        email: string;
    };
    token: string;
    refresh_token: string;
}

@injectable()
class AuthenticateUserUseCase {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository,
        @inject("UsersTokenRepository")
        private usersTokenRepository: IUsersTokenRepository,
        @inject("DayjsDateProvider")
        private dateProvider: IDateProvider
    ) {}
    async execute({ email, password }: IRequest) {
        const user = await this.usersRepository.findByEmail(email);
        const { expires_refresh_token_days } = auth;

        if (!user) {
            throw new AppError("Email or Password incorrect!");
        }

        const passwordMatch = await compare(password, user.password);

        if (!passwordMatch) {
            throw new AppError("email or password incorrect!");
        }

        const userToken = await this.usersTokenRepository.findById(
            user.id_user
        );

        if (userToken) {
            await this.usersTokenRepository.deleteById(userToken.id_token);
        }

        const { token, refresh_token: newRefreshToken } =
            generateTokenAndRefreshToken(user);

        const refresh_token_expires_date = this.dateProvider.addDays(
            expires_refresh_token_days
        );

        await this.usersTokenRepository.create({
            expires_date: refresh_token_expires_date,
            refresh_token: newRefreshToken,
            usersId_user: user.id_user,
        });

        const tokenReturn: IResponse = {
            token,
            user: {
                name: user.name,
                email: user.email,
            },
            refresh_token: newRefreshToken,
        };

        return tokenReturn;
    }
}

export { AuthenticateUserUseCase };
