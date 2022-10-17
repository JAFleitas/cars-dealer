import express from 'express';

import { currentUserRouter } from './currentUser';
import { signupRouter } from './signup';
import { signinRouter } from './signin'
import { signoutRouter } from './signout';

const router = express.Router();

router.use(signupRouter);
router.use(signinRouter);
router.use(signoutRouter);
router.use(currentUserRouter);

export { router as authRouter };