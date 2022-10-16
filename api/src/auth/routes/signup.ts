import express from 'express';
import { signup } from '../controllers/signup';
import { validateRequest } from '../../middlewares/validateRequest';
import { userValidation } from '../../validations/user';

const router = express.Router();

router.post('/api/auth/signup', userValidation, validateRequest, signup);

export { router as signupRouter};