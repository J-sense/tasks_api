import express from 'express';
import { rentalRequestController } from './tenant.controller';
import validateMiddleware from '../../middleware/validateRequest';
import { rentalRequestValidationSchema } from './tenant.validation';
const router = express.Router();
router.post(
  '/requests',
  validateMiddleware(rentalRequestValidationSchema),
  rentalRequestController.createRentalRequest,
);
export const rentalRequestRoutes = router;
