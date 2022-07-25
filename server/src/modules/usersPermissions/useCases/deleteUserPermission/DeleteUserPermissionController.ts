import { Request, Response } from "express";
import { container } from "tsyringe";

import { DeleteUserPermissionUseCase } from "./DeleteUserPermissionUseCase";

class DeleteUserPermissionController {
    async handle(request: Request, response: Response) {
        const { id_user_role } = request.body;

        const deleteUserPermissionUseCase = container.resolve(
            DeleteUserPermissionUseCase
        );

        await deleteUserPermissionUseCase.execute(id_user_role);

        return response.send();
    }
}

export { DeleteUserPermissionController };
