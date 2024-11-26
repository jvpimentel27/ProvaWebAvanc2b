import { Request, Response, NextFunction } from "express";

class PostMiddleware {
    constructor(){

    }

    async analyseToken(req: Request, res: Response, next: NextFunction){
        const token = req.headers["authorization"];

        if(!token){
            return res.status(401).json({
                message: "Nenhum token identificado"
            });
        }

        next();
    }
}

export default new PostMiddleware();