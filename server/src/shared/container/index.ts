import { UsersRepository } from "src/modules/users/infra/repository/UsersRepository";
import { IUsersRepository } from "src/modules/users/repository/IUsersRepository";
import { container } from "tsyringe";

container.registerSingleton<IUsersRepository>(
    "UsersRepository",
    UsersRepository
);
