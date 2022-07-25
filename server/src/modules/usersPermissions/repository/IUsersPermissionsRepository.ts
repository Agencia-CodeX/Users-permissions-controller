import { userRole } from "@prisma/client";

import { ICreateUsersPermissionsDTO } from "../dtos/ICreateUsersPermissionsDTO";

interface IUsersPermissionsRepository {
    create(data: ICreateUsersPermissionsDTO): Promise<userRole>;
    list(id_user: string): Promise<userRole[]>;
    delete(id_user_role: string): Promise<void>;
}

export { IUsersPermissionsRepository };
