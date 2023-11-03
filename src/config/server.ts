import express from 'express';
import cors from 'cors';

import { router } from '../routes';
import { errorMiddleware } from '../middlewares/errorMiddleware';
import setupSwagger from '../swagger';

export const app = express();

setupSwagger(app);

app.use(express.json());

app.use(cors());

app.use('/uploads', express.static('uploads'));

app.use(router);

app.use(errorMiddleware);
