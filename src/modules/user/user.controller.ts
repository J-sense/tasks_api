import { NextFunction, Request, Response } from 'express';
import { adminService } from './user.service';
const createAdmin = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await adminService.createAdmin(req.body);
    res.status(201).json({
      success: true,
      message: 'admin created successfully',
      date: result,
    });
  } catch (error) {
    next(error);
  }
};
const getAllUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await adminService.getAllUser();
    res.status(201).json({
      success: true,
      message: 'All user retrieved successfully',
      date: result,
    });
  } catch (error) {
    next(error);
  }
};
const AllUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await adminService.AllUser();
    res.status(201).json({
      success: true,
      message: 'All user retrieved successfully',
      date: result,
    });
  } catch (error) {
    next(error);
  }
};
const getAllHouse = async (req: Request, res: Response, next: NextFunction) => {
  console.log(req.user);
  try {
    const result = await adminService.getAllHouse(req.query);
    res.status(201).json({
      success: true,
      message: 'All house retrieved successfully',
      date: result,
    });
  } catch (error) {
    next(error);
  }
};
const deleteUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await adminService.delateUser(req.params.id);
    res.status(201).json({
      success: true,
      message: 'User deleted successfully',
      date: result,
    });
  } catch (error) {
    next(error);
  }
};
const deleteAHouse = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await adminService.delateAHouse(req.params.id);
    res.status(201).json({
      success: true,
      message: 'House deleted successfully',
      date: result,
    });
  } catch (error) {
    next(error);
  }
};
const updateUserRole = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await adminService.updateUserRole(req.params.id, req.body);
    res.status(201).json({
      success: true,
      message: 'House deleted successfully',
      date: result,
    });
  } catch (error) {
    next(error);
  }
};
export const adminController = {
  getAllUser,
  createAdmin,
  deleteUser,
  deleteAHouse,
  getAllHouse,
  updateUserRole,
  AllUser,
};
