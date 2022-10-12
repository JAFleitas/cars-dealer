import express, { Application } from "express";
import cors from "cors";
import { config } from "dotenv";
import logger from "morgan";

config();

const app: Application = express();

// middlewares
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
// routes

export default app;
