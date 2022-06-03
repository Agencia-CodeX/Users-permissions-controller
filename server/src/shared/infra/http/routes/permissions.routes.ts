import { Router } from "express";
import { CreatePermissionController } from "src/modules/permissions/useCases/createPermission/CreatePermissionController";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticate";

const permissionsRoutes = Router();
const createPermissionController = new CreatePermissionController();

permissionsRoutes.post(
    "/",
    ensureAuthenticated,
    createPermissionController.handle
);

export { permissionsRoutes };
