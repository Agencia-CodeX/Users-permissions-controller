import { prisma } from "src/prisma";

import { Users } from "@prisma/client";

import { ICreateUsersDTO } from "../../dtos/ICreateUsersDTO";
import { IUpdateUserDTO } from "../../dtos/IUpdateUserDTO";
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

    async findByEmail(email: string): Promise<Users> {
        const user = await prisma.users.findFirst({
            where: {
                email,
            },
        });

        return user;
    }

    async findById(id_user: string): Promise<Users> {
        const user = await prisma.users.findFirst({
            where: {
                id_user,
            },
        });

        return user;
    }

    async listUsers(): Promise<Users[]> {
        const users = await prisma.users.findMany();

        return users;
    }

    async update({ id_user, name }: IUpdateUserDTO): Promise<Users> {
        const user = await prisma.users.update({
            where: {
                id_user,
            },
            data: {
                name,
            },
        });

        return user;
    }

    async delete(idDelete: string): Promise<void> {
        await prisma.users.delete({
            where: {
                id_user: idDelete,
            },
        });
    }

    async filter(email?: string, name?: string): Promise<Users[]> {
        const user = await prisma.users.findMany({
            where: {
                OR: [
                    {
                        email: {
                            contains: email,
                        },
                    },
                    {
                        name: {
                            contains: name,
                        },
                    },
                ],
            },
        });

        return user;
    }
}

export { UsersRepository };
