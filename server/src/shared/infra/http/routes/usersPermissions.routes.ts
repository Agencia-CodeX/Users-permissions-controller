import { Router } from "express";
import { CreateUserPermissionController } from "src/modules/usersPermissions/useCases/createUserPermission/CreateUserPermissionController";
import { DeleteUserPermissionController } from "src/modules/usersPermissions/useCases/deleteUserPermission/DeleteUserPermissionController";
import { ListUserPermissionsController } from "src/modules/usersPermissions/useCases/listUserPermissions/ListUserPermissionsController";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticate";

const usersPermissionsRoutes = Router();

const createUsersPermissionsController = new CreateUserPermissionController();
const listUserPermissionsController = new ListUserPermissionsController();
const deleteUserPermissionController = new DeleteUserPermissionController();

usersPermissionsRoutes.post(
    "/",
    ensureAuthenticated,
    createUsersPermissionsController.handle
);

usersPermissionsRoutes.get("/", listUserPermissionsController.handle);
usersPermissionsRoutes.delete("/", deleteUserPermissionController.handle);

export { usersPermissionsRoutes };
