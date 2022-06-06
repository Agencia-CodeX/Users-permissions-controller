import { Request, Response } from "express";
import { container } from "tsyringe";

import { UpdateNameUseCase } from "./UpdateNameUseCase";

class UpdateNameController {
    async handle(request: Request, response: Response) {
        const { name } = request.body;

        const updateNameUseCase = container.resolve(UpdateNameUseCase);

        await updateNameUseCase.execute(name);

        return response.send();
    }
}

export { UpdateNameController };
