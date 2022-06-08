import mongoose, { Document } from 'mongoose';
import { Comic, ComicSchema } from '../../comics/models/comic.model';

export interface Cart {
    user: mongoose.Types.ObjectId;
    products: { comic: Comic; quantity: number }[];
    price: number;
    shippingPrice: number;
}

const CartSchema = new mongoose.Schema<Cart>({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users',
    },
    products: {
        type: [{ comic: ComicSchema, quantity: { type: Number, default: 1 } }],
        default: [],
    },
    price: {
        type: Number,
        default: function () {
            //TODO: Change
            return this.products.reduce((acc: number, curr: any) => {
                return (acc += curr.price);
            }, 0);
        },
    },
    shippingPrice: {
        type: Number,
        default: function () {
            return this.price > 50 ? 0 : 9.99;
        },
    },
});

export const CartModel = mongoose.model<Cart>('Cart', CartSchema);
