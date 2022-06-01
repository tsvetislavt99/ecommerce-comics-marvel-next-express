import { Request, Response, NextFunction } from 'express';

export const authDegugger = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    console.log(req.session);
    console.log(req.user);
    next();
};

export const isAuth = (req: Request, res: Response, next: NextFunction) => {
    if (req.isAuthenticated()) {
        next();
    } else {
        res.status(401).json({ message: 'Unauthorized' });
    }
};
