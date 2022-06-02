import { Request, Response } from "express";
import { container } from "tsyringe";

import { UpdateUserRoleUseCase } from "./UpdateUserRoleUseCase";

class UpdateUserRoleController {
    async handle(request: Request, response: Response) {
        const { id } = request.user;
        const { id_role } = request.body;

        const updateUserRoleUseCase = container.resolve(UpdateUserRoleUseCase);

        await updateUserRoleUseCase.execute({
            id_user: id,
            id_role,
        });

        return response.send();
    }
}

export { UpdateUserRoleController };
