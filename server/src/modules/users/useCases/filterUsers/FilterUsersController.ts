import { Request, Response } from "express";
import { container } from "tsyringe";

import { FilterUsersUseCase } from "./FilterUsersUseCase";

class FilterUsersController {
    async handle(request: Request, response: Response) {
        const name = request.query.name as string;
        const email = request.query.email as string;

        const filterUsersUseCase = container.resolve(FilterUsersUseCase);

        const users = await filterUsersUseCase.execute(email, name);

        return response.json(users);
    }
}

export { FilterUsersController };
