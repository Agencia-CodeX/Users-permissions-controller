import { Router } from "express";
import { CreatePermissionController } from "src/modules/permissions/useCases/createPermission/CreatePermissionController";
import { DeletePermissionController } from "src/modules/permissions/useCases/deletePermission/DeletePermissionController";
import { ListPermissionsController } from "src/modules/permissions/useCases/listPermissions/ListPermissionsController";
import { UpdateNameController } from "src/modules/permissions/useCases/updateName/UpdateNameController";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticate";

const permissionsRoutes = Router();

const createPermissionController = new CreatePermissionController();
const updateNameController = new UpdateNameController();
const listPermissionsController = new ListPermissionsController();
const deletePermissionController = new DeletePermissionController();

permissionsRoutes.post(
    "/",
    ensureAuthenticated,
    createPermissionController.handle
);

permissionsRoutes.patch("/", ensureAuthenticated, updateNameController.handle);
permissionsRoutes.get(
    "/",
    ensureAuthenticated,
    listPermissionsController.handle
);
permissionsRoutes.delete(
    "/",
    ensureAuthenticated,
    deletePermissionController.handle
);

export { permissionsRoutes };
