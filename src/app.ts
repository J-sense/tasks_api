import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import globalErrorHandler from './middleware/globalErrorHandler';
import notfound from './middleware/notFound';
<<<<<<< HEAD
import { authRoutes } from './modules/auth/auth.routes';
import { rentalHouseRoutes } from './modules/rentelHouse/renter.routes';
import { rentalRequestRoutes } from './modules/tenant/tenant.routes';
import { adminRoutes } from './modules/user/user.routes';

const app: Application = express();

=======
import { messageRoutes } from './modules/message/messsage.routes';
import { blogsRoutes } from './modules/blog/blog.routes';
import { projectRoutes } from './modules/projects/project.routes';
const app: Application = express();
// const port = 3000;
>>>>>>> 4549a80d91c12c9bed5bb07be3f21816852fe8db
// parsers
app.use(express.json());
app.use(cors());
app.use('', authRoutes);
app.use('/landlords', rentalHouseRoutes);
app.use('/tenants', rentalRequestRoutes);
app.use('/admin', adminRoutes);
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});
app.use('/api', messageRoutes);
app.use('/api', blogsRoutes);
app.use('/api', projectRoutes);
app.use(globalErrorHandler);
app.use(notfound);
export default app;
