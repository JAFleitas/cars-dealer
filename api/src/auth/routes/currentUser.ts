import express from 'express';
import { currentUser } from '../../middlewares/currentUser';
import { currentUserController } from '../controllers/currentUser';

const router = express.Router();

router.get('/api/auth/currentUser', currentUser, currentUserController);

export { router as currentUserRouter};