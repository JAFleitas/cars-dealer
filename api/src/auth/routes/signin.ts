import express from 'express';
import { signin } from '../controllers/signin';
import { validateRequest } from '../../middlewares/validateRequest';
import { userValidation } from '../../validations/user';

const router = express.Router();

router.post('/api/auth/signin', userValidation, validateRequest, signin);

export { router as signinRouter};