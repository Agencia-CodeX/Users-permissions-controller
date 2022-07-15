import { userRole } from "@prisma/client";

import { ICreateUsersPermissionsDTO } from "../dtos/ICreateUsersPermissionsDTO";

interface IUsersPermissionsRepository {
    create(data: ICreateUsersPermissionsDTO): Promise<userRole>;
    list(id_user: string): Promise<userRole[]>;
}

export { IUsersPermissionsRepository };
