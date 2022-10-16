import express, { Application } from "express";
import cookieSession from 'cookie-session';
import cors from "cors";
import { config } from "dotenv";
import logger from "morgan";
import { indexRouter } from "./routes";
import { errorHandler } from './middlewares/errorHandler';
import { NotFoundError } from "./errors/notFoundError";
import 'express-async-errors';

config();

const app: Application = express();

// middlewares
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(
    cookieSession({
        signed: false,
        secure: false
    })
);

// routes
app.use(indexRouter);
app.all('*', async () => { throw new NotFoundError() })
app.use(errorHandler);

export { app };
