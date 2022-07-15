import { AppError } from "src/shared/errors/App.error";
import { inject, injectable } from "tsyringe";

import { IPermissionsRepository } from "../../repository/IPermissionsRepository";

@injectable()
class DeletePermissionUseCase {
    constructor(
        @inject("PermissionsRepository")
        private permissionsRepository: IPermissionsRepository
    ) {}
    async execute(id_permission: number) {
        const permissionExists = await this.permissionsRepository.findById(
            id_permission
        );

        if (!permissionExists) {
            throw new AppError("Permission not found!");
        }

        await this.permissionsRepository.delete(id_permission);
    }
}

export { DeletePermissionUseCase };
