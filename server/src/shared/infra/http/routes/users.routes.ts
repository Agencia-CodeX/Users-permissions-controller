import { Router } from "express";
import { CreateUserController } from "src/modules/users/useCases/createUser/CreateUserController";

const usersRouter = Router();
const createUserController = new CreateUserController();

usersRouter.post("/", createUserController.handle);

export { usersRouter };
