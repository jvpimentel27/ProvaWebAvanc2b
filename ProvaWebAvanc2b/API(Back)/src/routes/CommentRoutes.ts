
import { Router } from "express";

import CommentController from "../controllers/CommentController.js";
import CommentMiddleware from "../middlewares/CommentMiddleware.js";

const CommentRouter = Router();


//Listar comentários
CommentRouter.get("/comments",  CommentMiddleware.analyseToken , CommentController.listComments);

//Inserir comentários
 CommentRouter.post("/comment", CommentMiddleware.analyseToken , CommentController.createComment);

// //Atualizar comentários
 CommentRouter.put("/comment/:id", CommentMiddleware.analyseToken , CommentController.updateComment);

// //Deletar comentários
 CommentRouter.delete("/comment/:id", CommentMiddleware.analyseToken , CommentController.deleteComment);


export default CommentRouter;
