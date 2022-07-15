import { Request, Response } from "express";
import { container } from "tsyringe";

import { DeletePermissionUseCase } from "./DeletePermissionUseCase";

class DeletePermissionController {
    async handle(request: Request, response: Response) {
        const { id_permission } = request.body;
        const id_permission_int = parseInt(id_permission, 10);

        const deletePermissionUseCase = container.resolve(
            DeletePermissionUseCase
        );

        await deletePermissionUseCase.execute(id_permission_int);

        return response.send();
    }
}

export { DeletePermissionController };
