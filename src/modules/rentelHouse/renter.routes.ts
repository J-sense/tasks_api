import express from 'express';
import { rentalController } from './rentel.controller';
import validateMiddleware from '../../middleware/validateRequest';
import { createRentalHouseValidation } from './rental.validation';
import auth from '../../middleware/auth';

const router = express.Router();
router.post(
  '/listings',
  auth('landlord'),
  validateMiddleware(createRentalHouseValidation),
  rentalController.rentalHouse,
);
router.get('/listings', auth('landlord'), rentalController.getAllHouse);
router.get('/all-houses', rentalController.listings);
router.get('/all-houses/:id', rentalController.singleHouse);
router.get('/requests', rentalController.getAllrentalRequest);
router.delete('/listings/:id', rentalController.deleteHouse);
router.put('/listings/:id', rentalController.updateHouse);
router.put('/requests/:id', rentalController.updateRentalRequest);
export const rentalHouseRoutes = router;
