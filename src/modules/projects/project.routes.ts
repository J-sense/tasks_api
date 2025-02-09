import express from 'express';
import { projectController } from './project.controller';
import { projectSchema } from './project.validation';
import validateMiddleware from '../../middleware/validateRequest';

const router = express.Router();
router.post(
  '/create-projects',
  validateMiddleware(projectSchema),
  projectController.createProjects,
);
router.get('/projects', projectController.findAllProjects);
router.delete('/projects/:id', projectController.deleteProjects);
router.patch('/projects/:id', projectController.updateProjects);
export const projectRoutes = router;
