import auth from "src/config/auth";
import { IDateProvider } from "src/shared/container/providers/DataProvider/IDateProvider";
import { AppError } from "src/shared/errors/App.error";
import { generateTokenAndRefreshToken } from "src/utils/generateAuth";
import { inject, injectable } from "tsyringe";

import { IUsersRepository } from "../../repository/IUsersRepository";
import { IUsersTokenRepository } from "../../repository/IUsersTokenRepository";

interface IRequest {
    id_user: string;
    refresh_token: string;
}

@injectable()
class RefreshTokenUseCase {
    constructor(
        @inject("UsersTokenRepository")
        private usersTokenRepository: IUsersTokenRepository,
        @inject("DayjsDateProvider")
        private dateProvider: IDateProvider,
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ) {}
    async execute({ refresh_token, id_user }: IRequest) {
        const user = await this.usersRepository.findById(id_user);

        if (!user) {
            throw new AppError("User does not exists!", 401);
        }

        const userToken = await this.usersTokenRepository.findByRefreshToken(
            refresh_token
        );

        if (!userToken) {
            throw new AppError("Refresh Token Error!", 401);
        }

        await this.usersTokenRepository.deleteById(userToken.id_token);

        const expires_date = this.dateProvider.addDays(
            auth.expires_refresh_token_days
        );

        const { token, refresh_token: newRefreshToken } =
            generateTokenAndRefreshToken(user);

        await this.usersTokenRepository.create({
            expires_date,
            refresh_token: newRefreshToken,
            usersId_user: user.id_user,
        });
        return {
            token,
            refresh_token: newRefreshToken,
        };
    }
}

export { RefreshTokenUseCase };
