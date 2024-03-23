import express from "express";
import logger from "./utils/logger";
import userRouter from "./api/user/user.router";
import errorHandler from "./middlewares/error-handler";

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());

app.use("/api/user", userRouter);

app.use(errorHandler);

app.listen(PORT, () => logger.info("server started"));
