import express from 'express';
import { authController } from './auth.controller';
import validateMiddleware from '../../middleware/validateRequest';
import { createUserValidation } from '../user/user.validation';
const router = express.Router();

router.post(
  '/register',
  validateMiddleware(createUserValidation),
  authController.register,
);
router.post('/login', authController.login);
export const authRoutes = router;
