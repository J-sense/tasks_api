import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import globalErrorHandler from './middleware/globalErrorHandler';
import notfound from './middleware/notFound';
import { messageRoutes } from './modules/message/messsage.routes';
import { blogsRoutes } from './modules/blog/blog.routes';
const app: Application = express();
// const port = 3000;
// parsers
app.use(express.json());
app.use(cors());
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});
app.use('/api', messageRoutes);
app.use('/api', blogsRoutes);
app.use(globalErrorHandler);
app.use(notfound);
export default app;
