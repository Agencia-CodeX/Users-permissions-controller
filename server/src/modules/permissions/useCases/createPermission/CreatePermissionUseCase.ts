import { inject, injectable } from "tsyringe";

import { ICreatePermissionsDTO } from "../../dtos/ICreatePermissionsDTO";
import { IPermissionsRepository } from "../../repository/IPermissionsRepository";

@injectable()
class CreatePermissionUseCase {
    constructor(
        @inject("PermissionsRepository")
        private permissionsRepository: IPermissionsRepository
    ) {}
    async execute({ role }: ICreatePermissionsDTO) {
        const permission = await this.permissionsRepository.create({
            role,
        });

        return permission;
    }
}

export { CreatePermissionUseCase };
