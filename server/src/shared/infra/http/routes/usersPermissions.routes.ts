import { Router } from "express";
import { CreateUserPermissionController } from "src/modules/usersPermissions/useCases/createUserPermission/CreateUserPermissionController";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticate";

const usersPermissionsRoutes = Router();
const createUsersPermissionsController = new CreateUserPermissionController();

usersPermissionsRoutes.post(
    "/",
    ensureAuthenticated,
    createUsersPermissionsController.handle
);

export { usersPermissionsRoutes };
