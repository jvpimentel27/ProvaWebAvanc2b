import { Request, Response, NextFunction } from "express";
import { verifyToken } from "../utils/JWT.js";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
class UserMiddleware {
    constructor(){

    }

    async analyseToken(req: Request, res: Response, next: NextFunction){
        const token = req.headers["authorization"];
        
        if(!token){
            return res.status(401).json({
                message: "Nenhum token identificado"
            });
        }
        let user = verifyToken(token);
        next();
    }
}

export default new UserMiddleware();