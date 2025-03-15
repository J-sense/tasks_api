import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import globalErrorHandler from './middleware/globalErrorHandler';
import notfound from './middleware/notFound';

import { authRoutes } from './modules/auth/auth.routes';
import { rentalHouseRoutes } from './modules/rentelHouse/renter.routes';
import { rentalRequestRoutes } from './modules/tenant/tenant.routes';
import { adminRoutes } from './modules/user/user.routes';
import { orderRoutes } from './modules/order/order.routes';

const app: Application = express();

// const port = 3000;

// parsers
app.use(express.json());
app.use(cors());
app.use('/', authRoutes);
app.use('/', rentalHouseRoutes);
app.use('/', rentalRequestRoutes);
app.use('/', adminRoutes);
app.use('/', orderRoutes);
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.use(globalErrorHandler);
app.use(notfound);
export default app;
