import express from 'express';
import { signin } from '../controllers/signin';
import { validation } from '../../middlewares/validation';
import { userSchema } from '../../validations/user';

const router = express.Router();

router.post('/api/auth/signin', validation(userSchema), signin);

export { router as signinRouter};