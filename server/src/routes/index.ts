import { Router } from 'express';
import { authRoutes } from './auth';
import { comicRoutes } from './comics';

export const routes = Router();

routes.use('/auth', authRoutes);
routes.use('/comics', comicRoutes);
