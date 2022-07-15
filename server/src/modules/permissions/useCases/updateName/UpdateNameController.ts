import { Request, Response } from "express";
import { container } from "tsyringe";

import { UpdateNameUseCase } from "./UpdateNameUseCase";

class UpdateNameController {
    async handle(request: Request, response: Response) {
        const { name, id_permission } = request.body;

        const updateNameUseCase = container.resolve(UpdateNameUseCase);

        await updateNameUseCase.execute({
            id_permission,
            name,
        });

        return response.send();
    }
}

export { UpdateNameController };
