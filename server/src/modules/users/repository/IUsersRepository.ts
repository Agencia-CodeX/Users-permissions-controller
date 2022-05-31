import { Users } from "@prisma/client";

import { ICreateUsersDTO } from "../dtos/ICreateUsersDTO";

interface IUsersRepository {
    create(data: ICreateUsersDTO): Promise<Users>;
    findByEmail(email: string): Promise<Users>;
    findById(id_user: string): Promise<Users>;
}

export { IUsersRepository };
