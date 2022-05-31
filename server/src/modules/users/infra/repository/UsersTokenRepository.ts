import { prisma } from "src/prisma";

import { usersTokens } from "@prisma/client";

import { ICreateUserTokenDTO } from "../../dtos/ICreateUserTokenDTO";
import { IUsersTokenRepository } from "../../repository/IUsersTokenRepository";

class UsersTokenRepository implements IUsersTokenRepository {
    async create({
        expires_date,
        usersId_user,
        refresh_token,
    }: ICreateUserTokenDTO): Promise<usersTokens> {
        const userToken = await prisma.usersTokens.create({
            data: {
                expires_date,
                refresh_token,
                usersId_user,
            },
        });

        return userToken;
    }

    async findByRefreshToken(refresh_token: string): Promise<usersTokens> {
        const userToken = await prisma.usersTokens.findFirst({
            where: {
                refresh_token,
            },
        });

        return userToken;
    }

    async findById(usersId_user: string): Promise<usersTokens> {
        const userToken = await prisma.usersTokens.findFirst({
            where: {
                usersId_user,
            },
        });

        return userToken;
    }

    async deleteById(id_token: string): Promise<void> {
        await prisma.usersTokens.delete({
            where: {
                id_token,
            },
        });
    }
}

export { UsersTokenRepository };
