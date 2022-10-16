import express from 'express';
import { authRouter } from './auth/routes';

const router = express.Router();

router.use(authRouter);

export { router as indexRouter };
