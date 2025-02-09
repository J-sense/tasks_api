import { NextFunction, Request, Response } from 'express';
import { blogServices } from './blog.service';

const createBlog = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await blogServices.createBlog(req.body);
    res.status(201).json({
      message: 'Blog created successfully',
      success: true,
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
const findAllBlogs = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await blogServices.findAllBlogs();
    res.status(201).json({
      message: 'Blogs retrieved successfully',
      success: true,
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
const deleteBlog = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await blogServices.deleteBlog(req.params.id);
    res.status(201).json({
      message: 'Blog deleted successfully',
      success: true,
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
const updateBlog = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await blogServices.updateBlog(req.params.id, req.body);
    res.status(201).json({
      message: 'Blog deleted successfully',
      success: true,
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
export const blogController = {
  updateBlog,
  deleteBlog,
  findAllBlogs,
  createBlog,
};
