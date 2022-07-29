import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateUserPermissionUseCase } from "./CreateUserPermissionUseCase";

class CreateUserPermissionController {
    async handle(request: Request, response: Response) {
        const { id } = request.user;
        const { usersId_user, permissionsId_permission } = request.body;

        const createUserPermissionUseCase = container.resolve(
            CreateUserPermissionUseCase
        );

        await createUserPermissionUseCase.execute({
            usersId_user,
            permissionsId_permission,
        });

        return response.send();
    }
}

export { CreateUserPermissionController };
