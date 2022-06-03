import { Router, Request, Response, NextFunction } from 'express';
import { ComicModel } from '../db/comics/models/comic.model';

export const comicRoutes = Router();

comicRoutes.get(
    '/all-comics',
    async (req: Request, res: Response, next: NextFunction) => {
        const data = await ComicModel.find({});

        res.json(data);
    }
);
