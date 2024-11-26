import { Router } from "express";

import AuthController from "../controllers/AuthController.js";


const AuthRouter = Router();

AuthRouter.post("/auth/signin", AuthController.signin);

AuthRouter.post("/auth/signup", AuthController.signup);

AuthRouter.post("/auth/signout", AuthController.signout);

export default AuthRouter;