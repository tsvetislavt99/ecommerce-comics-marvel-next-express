import { Router, Request, Response, NextFunction } from 'express';
import passport from 'passport';
import {
    addComicToCard,
    getCartItemsAmount,
    removeComicFromCart,
} from '../services/cartService';

export const cartRouter = Router();

//TODO: Add try catches and verify userId is same as authenitcated user
cartRouter.get(
    '/items-amount/:userId',
    passport.authenticate('jwt', { session: false }),
    async (req: Request, res: Response, next: NextFunction) => {
        const amount = await getCartItemsAmount(req.params.userId);
        res.send({ amount });
    }
);

cartRouter.put(
    '/add-comic-to-cart',
    passport.authenticate('jwt', { session: false }),
    async (req: Request, res: Response, next: NextFunction) => {
        const cart = await addComicToCard(req.body.userId, req.body.comicId);

        res.send({ cart });
    }
);

cartRouter.put(
    '/remove-comic-from-cart',
    passport.authenticate('jwt', { session: false }),
    async (req: Request, res: Response, next: NextFunction) => {
        const cart = await removeComicFromCart(
            req.body.userId,
            req.body.comicId
        );

        res.send({ cart });
    }
);
