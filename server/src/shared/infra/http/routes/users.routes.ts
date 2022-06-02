import { Router } from "express";
import { CreateUserController } from "src/modules/users/useCases/createUser/CreateUserController";
import { DeleteUserController } from "src/modules/users/useCases/deleteUser/DeleteUserController";
import { FilterUsersController } from "src/modules/users/useCases/filterUsers/FilterUsersController";
import { ListUsersController } from "src/modules/users/useCases/listUsers/ListUsersController";
import { UpdateUserController } from "src/modules/users/useCases/updateUser/UpdateUserController";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticate";

const usersRouter = Router();
const createUserController = new CreateUserController();
const listUsersController = new ListUsersController();
const updateUserController = new UpdateUserController();
const deleteUserController = new DeleteUserController();
const filterUsersController = new FilterUsersController();

usersRouter.post("/", createUserController.handle);
usersRouter.get("/", listUsersController.handle);
usersRouter.put("/", ensureAuthenticated, updateUserController.handle);
usersRouter.delete("/:id", deleteUserController.handle);
usersRouter.get("/filter", filterUsersController.handle);

export { usersRouter };
