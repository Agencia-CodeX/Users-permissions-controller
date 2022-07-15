import { Router } from "express";

import { authenticateRoutes } from "./authenticate.routes";
import { permissionsRoutes } from "./permissions.routes";
import { usersRouter } from "./users.routes";
import { usersPermissionsRoutes } from "./usersPermissions.routes";

const router = Router();

router.use("/users", usersRouter);
router.use("/permissions", permissionsRoutes);
router.use("/usersPermissions", usersPermissionsRoutes);
router.use(authenticateRoutes);
export { router };
