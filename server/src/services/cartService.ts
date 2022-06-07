import { CartModel } from '../db/cart/models/cart.model';
import { ComicModel } from '../db/comics/models/comic.model';

//TODO: Refactor
export const addComicToCard = async (userId: string, comicId: string) => {
    const cart = await CartModel.findOne({ user: userId });
    if (!cart) {
        const newCart = new CartModel({
            user: userId,
            products: [await ComicModel.findById(comicId)],
        });

        return await newCart.save();
    } else {
        const comic = await ComicModel.findById(comicId);
        if (comic) {
            cart.products.push(comic);
            cart.price = cart.products.reduce((acc: number, curr: any) => {
                return (acc += curr.price);
            }, 0);
        }
        cart.save();
        return cart;
    }
};

export const removeComicFromCart = async (userId: string, comicId: string) => {
    const comic = await ComicModel.findById(comicId);
    const cart = await CartModel.findOneAndUpdate(
        { user: userId },
        { $pull: { products: comic } }
    );

    return cart;
};

export const getCartItemsAmount = async (userId: string) => {
    const cart = await CartModel.findOne({ user: userId });
    return cart?.products.length;
};
