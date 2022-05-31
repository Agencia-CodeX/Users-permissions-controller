import { usersTokens } from "@prisma/client";

import { ICreateUserTokenDTO } from "../dtos/ICreateUserTokenDTO";

interface IUsersTokenRepository {
    create(data: ICreateUserTokenDTO): Promise<usersTokens>;
    findByRefreshToken(refresh_token: string): Promise<usersTokens>;
    findById(usersId_user: string): Promise<usersTokens>;
    deleteById(id_token: string): Promise<void>;
}

export { IUsersTokenRepository };
