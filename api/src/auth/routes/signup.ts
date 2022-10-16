import express from 'express';
import { signup } from '../controllers/signup';
import { validation } from '../../middlewares/validation';
import { userSchema } from '../../validations/user';

const router = express.Router();

router.post('/api/auth/signup', validation(userSchema), signup);

export { router as signupRouter};