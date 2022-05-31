import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";
import { UsersTokenRepository } from "src/modules/users/infra/repository/UsersTokenRepository";
import { AppError } from "src/shared/errors/App.error";

import auth from "../../../../config/auth";

interface IPayload {
    sub: string;
}

export async function ensureAuthenticated(
    request: Request,
    response: Response,
    next: NextFunction
) {
    const authHeader = request.headers.authorization;
    const usersTokenRepository = new UsersTokenRepository();

    if (!authHeader) {
        throw new AppError("Token missing", 401);
    }

    const [, token] = authHeader.split(" ");

    if (!token || token === "undefined") {
        throw new AppError("Token missing", 401);
    }

    try {
        const { sub: user_id } = verify(token, auth.secret_token) as IPayload;
        const user = usersTokenRepository.findById(user_id);

        if (!user) {
            throw new AppError("User does not exists!", 401);
        }
        request.user = {
            id: user_id,
        };
        next();
    } catch {
        throw new AppError("Invalid token!", 401);
    }
}
