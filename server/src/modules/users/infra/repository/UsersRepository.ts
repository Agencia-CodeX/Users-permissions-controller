import { prisma } from "src/prisma";

import { Users } from "@prisma/client";

import { ICreateUsersDTO } from "../../dtos/ICreateUsersDTO";
import { IUsersRepository } from "../../repository/IUsersRepository";

class UsersRepository implements IUsersRepository {
    async create({
        email,
        name,
        password,
        supervisor,
    }: ICreateUsersDTO): Promise<Users> {
        const user = await prisma.users.create({
            data: {
                email,
                name,
                password,
                supervisor,
            },
        });

        return user;
    }
}

export { UsersRepository };
