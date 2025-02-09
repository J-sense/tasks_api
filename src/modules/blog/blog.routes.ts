import express from 'express';
import { blogController } from './blog.controller';
import validateMiddleware from '../../middleware/validateRequest';
import { blogSchema } from './blog.validation';
const router = express.Router();
router.post(
  '/create-blog',
  validateMiddleware(blogSchema),
  blogController.createBlog,
);
router.get('/blogs', blogController.findAllBlogs);
router.delete('/blogs/:id', blogController.deleteBlog);
router.patch('/blogs/:id', blogController.updateBlog);
export const blogsRoutes = router;
