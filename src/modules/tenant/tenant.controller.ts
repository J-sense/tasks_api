import { NextFunction, Request, Response } from 'express';
import { rentalRequestService } from './tenant.service';

const createRentalRequest = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const user = req.user;
    console.log(user);
    const result = await rentalRequestService.createRentalHouseRequest(
      req.body,
    );
    res.status(201).json({
      success: true,
      message: 'Request submitted successfully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
const yourRequest = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { userId } = req.user;
    const result = await rentalRequestService.yourRequest(userId);
    res.status(201).json({
      success: true,
      message: 'Request submitted successfully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
export const rentalRequestController = {
  createRentalRequest,
  yourRequest,
};
