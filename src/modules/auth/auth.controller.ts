import { NextFunction, Response, Request } from 'express';
import { authServices } from './auth.service';

const register = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await authServices.register(req.body);
    res.status(201).json({
      success: true,
      message: 'User Register Successfully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
const login = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await authServices.login(req.body);
    res.status(201).json({
      success: true,
      message: 'Logged in successfully',
      token: result.token,
      data: result.isUserExist,
    });
  } catch (error) {
    next(error);
  }
};
export const updateUserCredentialsController = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const userData = req.user; // Assuming user data is attached to req.user after authentication
    const payload = req.body;

    const result = await authServices.updateUserCredentials(userData, payload);
    res.status(200).json({
      success: true,
      message: 'updated successfully',

      data: result,
    });
  } catch (error) {
    next(error);
  }
};
const isActiveController = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await authServices.activeAction(req.params.id);
    res.status(201).json({
      success: true,
      message: 'User in-active successfully',

      data: result,
    });
  } catch (error) {
    next(error);
  }
};
export const authController = {
  register,
  login,
  updateUserCredentialsController,
  isActiveController,
};
