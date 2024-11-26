import { NextFunction, Request, Response, Router } from "express";

import UserController from "../controllers/UserController.js";
import UserMiddleware from "../middlewares/UserMiddleware.js";

const UserRouter = Router();

//Listar usuários
UserRouter.get("/users", UserMiddleware.analyseToken , UserController.listUser);

//Inserir usuários
UserRouter.post("/user", UserMiddleware.analyseToken, UserController.createUser);

//Atualizar usuários
UserRouter.put("/user/:id", UserMiddleware.analyseToken, UserController.updateUser);

//Deletar usuários
UserRouter.delete("/user/:id", UserMiddleware.analyseToken, UserController.deleteUser);

//Listar autor do post
UserRouter.get("/author/:id", UserMiddleware.analyseToken , UserController.listAuthor);

export default UserRouter;