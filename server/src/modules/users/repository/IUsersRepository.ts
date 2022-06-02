import { Users } from "@prisma/client";

import { ICreateUsersDTO } from "../dtos/ICreateUsersDTO";
import { IUpdateUserDTO } from "../dtos/IUpdateUserDTO";

interface IUsersRepository {
    create(data: ICreateUsersDTO): Promise<Users>;
    findByEmail(email: string): Promise<Users>;
    findById(id_user: string): Promise<Users>;
    listUsers(): Promise<Users[]>;
    update(data: IUpdateUserDTO): Promise<Users>;
    delete(id_user: string): Promise<void>;
    filter(email?: string, name?: string): Promise<Users[]>;
    updateRole(data: IUpdateUserDTO): Promise<Users>;
}

export { IUsersRepository };
