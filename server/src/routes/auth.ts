import { Router, Request, Response, NextFunction } from 'express';

export const authRoutes = Router();

authRoutes.get('/', (req: Request, res: Response) => {
    res.send('hi');
});
