import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListUserPermissionsUseCase } from "./ListUserPermissionsUseCase";

class ListUserPermissionsController {
    async handle(request: Request, response: Response) {
        const { id_user } = request.body;

        const listUserPermissionsUseCase = container.resolve(
            ListUserPermissionsUseCase
        );

        const userPermissions = await listUserPermissionsUseCase.execute(
            id_user
        );

        return response.json(userPermissions);
    }
}

export { ListUserPermissionsController };
