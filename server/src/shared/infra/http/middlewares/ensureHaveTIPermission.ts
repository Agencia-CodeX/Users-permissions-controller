import { NextFunction, Request, Response } from "express";
import { PermissionsRepository } from "src/modules/permissions/infra/repository/PermissionsRepository";
import { AppError } from "src/shared/errors/App.error";

export async function ensureHaveTIPermission(
    request: Request,
    response: Response,
    next: NextFunction
) {
    //
}
