import express from "express";
import UserController from "./user.controller";

const userRouter = express.Router();
const userController = new UserController();

userRouter.post("/create", userController.createUser.bind(userController));
userRouter.get("/", userController.getUser.bind(userController));

export default userRouter;
