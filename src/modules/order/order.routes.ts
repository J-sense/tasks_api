import express from 'express';
import { orderController } from './order.controller';
const router = express.Router();
router.post('/api/create-checkout-session', orderController.order);
export const orderRoutes = router;
