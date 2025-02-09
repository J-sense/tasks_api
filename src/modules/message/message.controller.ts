import { NextFunction, Request, Response } from 'express';
import { messageService } from './message.service';

const createMessage = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await messageService.createMessage(req.body);
    res.status(201).json({
      success: true,
      message: 'Message sent successfully',
      date: result,
    });
  } catch (error) {
    next(error);
  }
};
const findAllMessage = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await messageService.findAllMessage();
    res.status(201).json({
      success: true,
      message: 'Message rettrived  successfully',
      date: result,
    });
  } catch (error) {
    next(error);
  }
};
export const messageController = {
  createMessage,
  findAllMessage,
};
