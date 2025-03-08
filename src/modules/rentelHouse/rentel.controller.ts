import { NextFunction, Request, Response } from 'express';
import { rentalService } from './rentel.service';

const rentalHouse = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await rentalService.createHouse(req.body);
    res.status(201).json({
      success: true,
      message: 'House created successfully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
const getAllHouse = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { userId } = req.user;
    console.log(userId);
    const result = await rentalService.AllHouses(userId);
    res.status(201).json({
      success: true,
      message: 'All Houses Retrieved successfully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
const listings = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await rentalService.listings(req.query);
    res.status(201).json({
      success: true,
      message: 'All Houses Retrieved successfully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
const getAllrentalRequest = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await rentalService.getAllRentalRequest();
    res.status(201).json({
      success: true,
      message: 'All Request Retrieved successfully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
const deleteHouse = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await rentalService.deleteHouse(req.params.id);
    res.status(201).json({
      success: true,
      message: ' Houses Deleted successfully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
const updateHouse = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await rentalService.updateHouse(req.params.id, req.body);
    res.status(201).json({
      success: true,
      message: ' Houses updated successfully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
const singleHouse = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await rentalService.singleHouse(req.params.id);
    res.status(201).json({
      success: true,
      message: 'House retrieved successfully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
const updateRentalRequest = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await rentalService.rentalRequestUpdate(
      req.params.id,
      req.body,
    );
    res.status(201).json({
      success: true,
      message: ' Request updated successfully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
export const rentalController = {
  rentalHouse,
  getAllHouse,
  deleteHouse,
  updateHouse,
  singleHouse,
  listings,
  getAllrentalRequest,
  updateRentalRequest,
};
