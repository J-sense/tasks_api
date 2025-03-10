import express from 'express';
import { rentalRequestController } from './tenant.controller';
import validateMiddleware from '../../middleware/validateRequest';
import { rentalRequestValidationSchema } from './tenant.validation';
import auth from '../../middleware/auth';
const router = express.Router();
router.post(
  '/tenants/requests',
  validateMiddleware(rentalRequestValidationSchema),
  rentalRequestController.createRentalRequest,
);
router.get(
  '/tenants/requests',
  auth('tenant'),
  rentalRequestController.yourRequest,
);
export const rentalRequestRoutes = router;
