import express from 'express';
// import passport from '../../lib/security';
import { login } from '../../controllers/auth/loginController';

const router = express.Router();

export default router;

// ログイン
router.post('/login', login);
