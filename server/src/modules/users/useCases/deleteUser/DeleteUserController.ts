import { Request, Response } from "express";
import { container } from "tsyringe";

import { DeleteUserUseCase } from "./DeleteUserUseCase";

class DeleteUserController {
    async handle(request: Request, response: Response) {
        const { idDelete } = request.params;

        const deleteUserUseCase = container.resolve(DeleteUserUseCase);

        await deleteUserUseCase.execute(idDelete);

        return response.send();
    }
}

export { DeleteUserController };