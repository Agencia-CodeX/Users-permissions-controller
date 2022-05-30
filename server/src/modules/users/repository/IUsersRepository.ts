import { Users } from "@prisma/client";

import { ICreateUsersDTO } from "../dtos/ICreateUsersDTO";

interface IUsersRepository {
    create(data: ICreateUsersDTO): Promise<Users>;
}

export { IUsersRepository };
