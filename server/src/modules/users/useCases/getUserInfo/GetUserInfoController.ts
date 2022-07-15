import { Request, Response } from "express";
import { container } from "tsyringe";
import { GetUserInfoUseCase } from "./GetUserInfoUseCase";

class GetUserInfoController {
    async handle(request: Request, response: Response) {
        const { id } = request.user;
        const getUserInfoUseCase = container.resolve(GetUserInfoUseCase);
        const userInfo = await getUserInfoUseCase.execute({ id_user: id });
        return response.json(userInfo);
    }
}

export { GetUserInfoController }