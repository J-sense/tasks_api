import express from 'express';
import { messageController } from './message.controller';
import validateMiddleware from '../../middleware/validateRequest';
import { messageValidationSchema } from './message.validation';
const router = express.Router();
router.post(
  '/message',
  validateMiddleware(messageValidationSchema),
  messageController.createMessage,
);
router.get('/messages', messageController.findAllMessage);
export const messageRoutes = router;
