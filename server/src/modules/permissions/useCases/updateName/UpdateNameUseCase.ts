import { inject, injectable } from "tsyringe";

import { IPermissionsRepository } from "../../repository/IPermissionsRepository";

interface IRequest {
    name: string;
    id_permission: number;
}

@injectable()
class UpdateNameUseCase {
    constructor(
        @inject("PermissionsRepository")
        private permissionsRepository: IPermissionsRepository
    ) {}
    async execute({ name, id_permission }: IRequest) {
        const permission = await this.permissionsRepository.updateName(
            name,
            id_permission
        );

        return permission;
    }
}

export { UpdateNameUseCase };
