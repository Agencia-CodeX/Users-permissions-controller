import { NextFunction, Request, Response } from "express";
import { UsersRepository } from "src/modules/users/infra/repository/UsersRepository";
import { AppError } from "src/shared/errors/App.error";


export async function ensureAdmin(
    request: Request,
    response: Response,
    next: NextFunction
) {
    const { id } = request.user;

    const usersRepository = new UsersRepository();
    const user = await usersRepository.findById(id);

    if (!user.isAdmin) {
        throw new AppError("User isnt admin!");
    }

    return next();
}