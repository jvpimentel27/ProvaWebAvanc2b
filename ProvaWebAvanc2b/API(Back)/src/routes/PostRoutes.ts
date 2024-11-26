import { Router } from "express";

import postController from "../controllers/PostController.js";
import UserMiddleware from "../middlewares/UserMiddleware.js";


const postRouter = Router();


//Listar posts
postRouter.get("/posts", UserMiddleware.analyseToken , postController.listPosts);

//Inserir posts
postRouter.post("/post", UserMiddleware.analyseToken , postController.createPost);

//Atualizar posts
postRouter.put("/post/:id", UserMiddleware.analyseToken , postController.updatePost);

//Deletar posts
postRouter.delete("/post/:id", UserMiddleware.analyseToken , postController.deletePost);

//Buscar posts
postRouter.get("/post/:id", UserMiddleware.analyseToken , postController.getPost);

export default postRouter;