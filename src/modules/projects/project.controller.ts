import { NextFunction, Request, Response } from 'express';
import { projectServices } from './project.service';

const createProjects = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await projectServices.createProject(req.body);
    res.status(201).json({
      message: ' created successfully',
      success: true,
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
const findAllProjects = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await projectServices.findAllProject();
    res.status(201).json({
      message: 'Projects retrieved successfully',
      success: true,
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
const deleteProjects = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await projectServices.deleteProject(req.params.id);
    res.status(201).json({
      message: 'Project deleted successfully',
      success: true,
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
const updateProjects = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await projectServices.updateProject(req.params.id, req.body);
    res.status(201).json({
      message: 'Project deleted successfully',
      success: true,
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
export const projectController = {
  updateProjects,
  deleteProjects,
  findAllProjects,
  createProjects,
};
