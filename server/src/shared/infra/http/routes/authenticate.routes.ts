import { Router } from "express";
import { AuthenticateUserController } from "src/modules/users/useCases/authenticateUser/AuthenticateUserController";
import { RefreshTokenController } from "src/modules/users/useCases/refreshToken/refreshTokenController";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticate";

const authenticateRoutes = Router();

const authenticateUserController = new AuthenticateUserController();
const refreshTokenController = new RefreshTokenController();

authenticateRoutes.post("/sessions", authenticateUserController.handle);
authenticateRoutes.post(
    "/refresh_token",
    ensureAuthenticated,
    refreshTokenController.handle
);

export { authenticateRoutes };
