import express from 'express';
import { signupRouter } from './signup';
import { signinRouter } from './signin'

const router = express.Router();

router.use(signupRouter);
router.use(signinRouter);

export { router as authRouter };