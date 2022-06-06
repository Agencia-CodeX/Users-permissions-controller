import { inject, injectable } from "tsyringe";

import { IPermissionsRepository } from "../../repository/IPermissionsRepository";

@injectable()
class ListPermissionsUseCase {
    constructor(
        @inject("PermissionsRepository")
        private permissionsRepository: IPermissionsRepository
    ) {}
    async execute() {
        const permissions = await this.permissionsRepository.list();

        return permissions;
    }
}

export { ListPermissionsUseCase };
