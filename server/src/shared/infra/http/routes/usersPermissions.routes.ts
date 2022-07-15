import { Router } from "express";
import { CreateUserPermissionController } from "src/modules/usersPermissions/useCases/createUserPermission/CreateUserPermissionController";
import { ListUserPermissionsController } from "src/modules/usersPermissions/useCases/listUserPermissions/ListUserPermissionsController";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticate";

const usersPermissionsRoutes = Router();
const createUsersPermissionsController = new CreateUserPermissionController();
const listUserPermissionsController = new ListUserPermissionsController();

usersPermissionsRoutes.post(
    "/",
    ensureAuthenticated,
    createUsersPermissionsController.handle
);

usersPermissionsRoutes.get("/", listUserPermissionsController.handle);

export { usersPermissionsRoutes };
