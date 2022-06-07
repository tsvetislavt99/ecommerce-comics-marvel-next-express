import { Router } from 'express';
import { authRoutes } from './auth';
import { comicRoutes } from './comics';
import { cartRouter } from './cart';

export const routes = Router();

routes.use('/auth', authRoutes);
routes.use('/comics', comicRoutes);
routes.use('/cart', cartRouter);
