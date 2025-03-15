import express from 'express';
import { authController } from './auth.controller';
import validateMiddleware from '../../middleware/validateRequest';
import { createUserValidation } from '../user/user.validation';
import auth from '../../middleware/auth';
const router = express.Router();

router.post(
  '/register',
  validateMiddleware(createUserValidation),
  authController.register,
);
router.post('/login', authController.login);
router.put(
  '/editProfile',
  auth('admin', 'landlord', 'tenant'),
  authController.updateUserCredentialsController,
);
router.put(
  '/admin/active/:id',
  auth('admin'),
  authController.isActiveController,
);
export const authRoutes = router;
