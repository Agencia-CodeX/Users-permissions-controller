import { Users } from "@prisma/client";

import { ICreateUsersDTO } from "../dtos/ICreateUsersDTO";
import { IUpdateUserDTO } from "../dtos/IUpdateUserDTO";

type UserBasicInfo = {
    id_user: string;
    name: string;
    email: string;
};
interface IUsersRepository {
    create(data: ICreateUsersDTO): Promise<Users>;
    findByEmail(email: string): Promise<Users>;
    findById(id_user: string): Promise<Users>;
    listUsers(): Promise<Users[]>;
    update(data: IUpdateUserDTO): Promise<Users>;
    delete(id_user: string): Promise<UserBasicInfo>;
    filter(search: string): Promise<UserBasicInfo[]>;
}

export { IUsersRepository, UserBasicInfo };
