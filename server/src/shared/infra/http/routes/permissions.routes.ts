import { Router } from "express";
import { CreatePermissionController } from "src/modules/permissions/useCases/createPermission/CreatePermissionController";
import { ListPermissionsController } from "src/modules/permissions/useCases/listPermissions/ListPermissionsController";
import { UpdateNameController } from "src/modules/permissions/useCases/updateName/UpdateNameController";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticate";

const permissionsRoutes = Router();

const createPermissionController = new CreatePermissionController();
const updateNameController = new UpdateNameController();
const listPermissionsController = new ListPermissionsController();

permissionsRoutes.post(
    "/",
    ensureAuthenticated,
    createPermissionController.handle
);

permissionsRoutes.patch("/", updateNameController.handle);
permissionsRoutes.get("/", listPermissionsController.handle);

export { permissionsRoutes };
