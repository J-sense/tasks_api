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
router.get('/users', auth('admin'), adminController.getAllUser);
router.get('/all-user', adminController.AllUser);
router.get('/listings', auth('admin'), adminController.getAllHouse);
router.delete('/users/:id', auth('admin'), adminController.deleteUser);
router.put('/users/:id', auth('admin'), adminController.updateUserRole);
router.delete('/listings/:id', auth('admin'), adminController.deleteAHouse);

export const adminRoutes = router;
