import express, { Request, Response } from "express";
import cors from 'cors';
import { PrismaClient } from "@prisma/client";
import UserRouter from "./routes/UserRoutes.js";
import PostRouter from "./routes/PostRoutes.js";
import CommentRouter from "./routes/CommentRoutes.js";
import AuthRoutes from "./routes/AuthRoutes.js";

const prisma = new PrismaClient();

const app = express();
app.use(express.json());
app.use(cors());

app.use(UserRouter);
app.use(PostRouter);
app.use(CommentRouter);
app.use(AuthRoutes);

app.listen(3000, function () {
  console.log("Servidor rodando na porta 3000");
});