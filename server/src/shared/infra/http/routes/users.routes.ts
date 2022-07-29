import { Router } from "express";
import { CreateUserController } from "src/modules/users/useCases/createUser/CreateUserController";
import { DeleteUserController } from "src/modules/users/useCases/deleteUser/DeleteUserController";
import { FilterUsersController } from "src/modules/users/useCases/filterUsers/FilterUsersController";
import { GetUserInfoController } from "src/modules/users/useCases/getUserInfo/GetUserInfoController";
import { ListUsersController } from "src/modules/users/useCases/listUsers/ListUsersController";
import { UpdateUserController } from "src/modules/users/useCases/updateUser/UpdateUserController";
import { UpdateUserRoleController } from "src/modules/users/useCases/updateUserRole/UpdateUserRoleController";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticate";
import { ensureHaveTIPermission } from "../middlewares/ensureHaveTIPermission";

const usersRouter = Router();
const createUserController = new CreateUserController();
const listUsersController = new ListUsersController();
const updateUserController = new UpdateUserController();
const deleteUserController = new DeleteUserController();
const filterUsersController = new FilterUsersController();
const updateUserRole = new UpdateUserRoleController();
const getUserInfoController = new GetUserInfoController();

usersRouter.post("/", createUserController.handle);
usersRouter.get("/", listUsersController.handle);
usersRouter.get("/info", ensureAuthenticated, getUserInfoController.handle);
usersRouter.put("/", ensureAuthenticated, updateUserController.handle);
usersRouter.delete(
    "/:id",
    ensureAuthenticated,
    ensureHaveTIPermission,
    deleteUserController.handle
);
usersRouter.get("/filter", filterUsersController.handle);
usersRouter.patch("/role", ensureAuthenticated, updateUserRole.handle);

export { usersRouter };
