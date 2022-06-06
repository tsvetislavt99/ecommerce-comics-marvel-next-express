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

comicRoutes.get(
    '/comics-page/:offset/:limit',
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            console.log('here');
            const data = await ComicModel.find({})
                .skip(Number(req.params.offset))
                .limit(Number(req.params.limit));
            const totalCount = await ComicModel.count();
            res.json({ data: data, total: totalCount });
        } catch (error) {
            console.log(error);
            next(error);
        }
    }
);
