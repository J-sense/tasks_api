import express from 'express';
import { rentalController } from './rentel.controller';
import validateMiddleware from '../../middleware/validateRequest';
import { createRentalHouseValidation } from './rental.validation';
import auth from '../../middleware/auth';

const router = express.Router();
router.post(
  '/landlords/listings',
  auth('landlord'),
  validateMiddleware(createRentalHouseValidation),
  rentalController.rentalHouse,
);
router.get(
  '/landlords/listings',
  auth('landlord'),
  rentalController.getAllHouse,
);
router.get('/landlords/all-houses', rentalController.listings);
router.get('/landlords/all-houses/:id', rentalController.singleHouse);
router.get('/landlords/requests', rentalController.getAllrentalRequest);
router.delete('/landlords/listings/:id', rentalController.deleteHouse);
router.put('/landlords/listings/:id', rentalController.updateHouse);
router.put('/landlords/requests/:id', rentalController.updateRentalRequest);
export const rentalHouseRoutes = router;
