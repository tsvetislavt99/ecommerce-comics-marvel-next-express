import { NextFunction, Request, Response } from 'express';

export const confirmCorrectUserGetReqs = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    if (req.user && req.params.userId) {
        if (req.user.id.toString() === req.params.userId) {
            return next();
        } else {
            res.send(401);
        }
    } else {
        res.send(401);
    }
};

export const confirmCorrectUserPostReqs = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    if (req.user && req.body.userId) {
        if (req.user.id.toString() === req.body.userId) {
            return next();
        } else {
            res.send(401);
        }
    } else {
        res.send(401);
    }
};
