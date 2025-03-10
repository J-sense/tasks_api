import express from 'express';
import { adminController } from './user.controller';
import validateMiddleware from '../../middleware/validateRequest';
import { createUserValidation } from './user.validation';
import auth from '../../middleware/auth';
const router = express.Router();
router.post(
  '/create-admin',
  validateMiddleware(createUserValidation),
  adminController.createAdmin,
);
router.get('/admin/users', auth('admin'), adminController.getAllUser);
router.get('/admin/all-user', adminController.AllUser);
router.get('/admin/listings', auth('admin'), adminController.getAllHouse);
router.delete('/admin/users/:id', auth('admin'), adminController.deleteUser);
router.put('/admin/users/:id', auth('admin'), adminController.updateUserRole);
router.delete(
  '/admin/listings/:id',
  auth('admin'),
  adminController.deleteAHouse,
);

export const adminRoutes = router;
