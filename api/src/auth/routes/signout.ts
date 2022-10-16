import express from 'express';
import { signout } from '../controllers/signout';

const router = express.Router();

router.post('/api/auth/signout', signout);

export { router as signoutRouter };