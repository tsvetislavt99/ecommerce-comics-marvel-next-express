import { Router, Request, Response, NextFunction } from 'express';
import { ComicModel } from '../db/comics/models/comic.model';
import { CartModel } from '../db/cart/models/cart.model';
import { addComicToCard, removeComicFromCart } from '../services/cartService';

export const cartRouter = Router();

cartRouter.put(
    '/add-comic-to-cart',
    async (req: Request, res: Response, next: NextFunction) => {
        const cart = await addComicToCard(req.body.userId, req.body.comicId);

        res.send({ cart });
    }
);

cartRouter.put(
    '/remove-comic-from-cart',
    async (req: Request, res: Response, next: NextFunction) => {
        const cart = await removeComicFromCart(
            req.body.userId,
            req.body.comicId
        );

        res.send({ cart });
    }
);
