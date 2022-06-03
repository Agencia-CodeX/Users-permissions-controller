import { Permissions } from "@prisma/client";

import { ICreatePermissionsDTO } from "../dtos/ICreatePermissionsDTO";

interface IPermissionsRepository {
    create(data: ICreatePermissionsDTO): Promise<Permissions>;
}

export { IPermissionsRepository };
