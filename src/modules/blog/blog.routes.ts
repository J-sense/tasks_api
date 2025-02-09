import express from 'express';
import { blogController } from './blog.controller';
const router = express.Router();
router.post('/create-blog', blogController.createBlog);
router.get('/blogs', blogController.findAllBlogs);
router.delete('/blogs/:id', blogController.deleteBlog);
router.patch('/blogs/:id', blogController.updateBlog);
export const blogsRoutes = router;
