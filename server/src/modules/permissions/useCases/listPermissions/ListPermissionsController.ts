import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListPermissionsUseCase } from "./ListPermissionsUseCase";

class ListPermissionsController {
    async handle(request: Request, response: Response) {
        const listPermissionsUseCase = container.resolve(
            ListPermissionsUseCase
        );

        const permissions = await listPermissionsUseCase.execute();

        return response.json(permissions);
    }
}

export { ListPermissionsController };
