import express from 'express';
import { signupRouter } from './signup';
import { signinRouter } from './signin'
import { currentUserRouter } from './currentUser';

const router = express.Router();

router.use(signupRouter);
router.use(signinRouter);
router.use(currentUserRouter);

export { router as authRouter };