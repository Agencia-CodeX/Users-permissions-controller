import { userRole } from "@prisma/client";

import { ICreateUsersPermissionsDTO } from "../dtos/ICreateUsersPermissionsDTO";

interface IUsersPermissionsRepository {
    create(data: ICreateUsersPermissionsDTO): Promise<userRole>;
}

export { IUsersPermissionsRepository };
