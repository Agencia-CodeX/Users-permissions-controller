import { Permissions } from "@prisma/client";

import { ICreatePermissionsDTO } from "../dtos/ICreatePermissionsDTO";

interface IPermissionsRepository {
    create(data: ICreatePermissionsDTO): Promise<Permissions>;
    updateName(name: string, id_permission: number): Promise<Permissions>;
    list(): Promise<Permissions[]>;
    delete(id_permission: number): Promise<void>;
    findById(id_permission: number): Promise<Permissions>;
}

export { IPermissionsRepository };
