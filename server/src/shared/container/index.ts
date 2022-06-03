import { PermissionsRepository } from "src/modules/permissions/infra/repository/PermissionsRepository";
import { IPermissionsRepository } from "src/modules/permissions/repository/IPermissionsRepository";
import { UsersRepository } from "src/modules/users/infra/repository/UsersRepository";
import { UsersTokenRepository } from "src/modules/users/infra/repository/UsersTokenRepository";
import { IUsersRepository } from "src/modules/users/repository/IUsersRepository";
import { IUsersTokenRepository } from "src/modules/users/repository/IUsersTokenRepository";
import { container } from "tsyringe";

import "./providers";

container.registerSingleton<IUsersRepository>(
    "UsersRepository",
    UsersRepository
);

container.registerSingleton<IUsersTokenRepository>(
    "UsersTokenRepository",
    UsersTokenRepository
);

container.registerSingleton<IPermissionsRepository>(
    "PermissionsRepository",
    PermissionsRepository
);
