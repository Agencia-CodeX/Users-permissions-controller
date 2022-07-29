import { NextFunction, Request, Response } from "express";
import { decode } from "jsonwebtoken";
import { AppError } from "src/shared/errors/App.error";

interface IPayload {
    sub: string;
} 

export async function addUserInfoToRequest(request: Request, response: Response, next: NextFunction) {
    const authHeader = request.headers.authorization;

    if (!authHeader) {
        throw new AppError("Token missing", 401);
    }

    const [, token] = authHeader.split(" ");

    if (!token) {
        throw new AppError("Token missing", 401);
    }

    try {
        const { sub: user_id } = decode(token as string) as IPayload;
        
        request.user = {
            id: user_id
        };
        
        next();
    } catch {
        throw new AppError("Invalid token format!")
    }
}