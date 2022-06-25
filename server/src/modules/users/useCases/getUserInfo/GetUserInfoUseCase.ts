import { AppError } from "src/shared/errors/App.error";
import { inject, injectable } from "tsyringe";
import { IUsersRepository } from "../../repository/IUsersRepository";

interface IRequest {
    id_user: string;
}

interface IResponse {
    name: string;
    email: string;
    created_at: Date;
    supervisor: string;
}

@injectable()
class GetUserInfoUseCase {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ) { }

    async execute({ id_user }: IRequest) {

        const user = await this.usersRepository.findById(id_user);

        const userInfo: IResponse = {
            name: user.name,
            email: user.email,
            created_at: user.created_at,
            supervisor: user.supervisor
        }

        return userInfo;
    }
}

export { GetUserInfoUseCase }