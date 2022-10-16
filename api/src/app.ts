import express, { Application } from "express";
import cors from "cors";
import { config } from "dotenv";
import logger from "morgan";
import { indexRouter } from "./routes";

config();

const app: Application = express();

// middlewares
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// routes
app.use(indexRouter);

export default app;
