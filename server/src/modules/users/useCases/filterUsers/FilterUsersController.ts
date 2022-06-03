import { Request, Response } from "express";
import { container } from "tsyringe";

import { FilterUsersUseCase } from "./FilterUsersUseCase";

class FilterUsersController {
    async handle(request: Request, response: Response) {
        const search = request.query.search as string;

        const filterUsersUseCase = container.resolve(FilterUsersUseCase);

        const users = await filterUsersUseCase.execute(search);

        return response.json(users);
    }
}

export { FilterUsersController };
