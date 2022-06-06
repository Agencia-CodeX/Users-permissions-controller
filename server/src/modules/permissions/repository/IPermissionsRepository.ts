import { Permissions } from "@prisma/client";

import { ICreatePermissionsDTO } from "../dtos/ICreatePermissionsDTO";

interface IPermissionsRepository {
    create(data: ICreatePermissionsDTO): Promise<Permissions>;
    updateName(name: string, id_permission: number): Promise<Permissions>;
    list(): Promise<Permissions[]>;
}

export { IPermissionsRepository };
