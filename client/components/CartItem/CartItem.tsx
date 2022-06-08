import { TrashIcon } from '@heroicons/react/solid';
import { useCart } from 'contexts/CartContext';
import { useUser } from 'contexts/UserContext';
import React from 'react';
import { removeComicFromCart } from 'services/cartService';

type Props = {
    comic: {
        _id: string;
        title: string;
        description: string | null;
        thumbnail: string;
        price: number;
    };
    quantity: number;
};

export default function CartItem({ comic, quantity }: Props) {
    const { id } = useUser();
    const { setCart } = useCart();

    const removeFromCartHandler = async () => {
        try {
            const newCart = await removeComicFromCart(id, comic._id);
            setCart(newCart.cart);
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className="flex items-center py-8 border-b border-gray-200">
            <div className="w-1/3 mr-5 sm:w-1/4">
                <img
                    src={comic.thumbnail}
                    alt=""
                    className="w-full h-full rounded-lg object-center object-cover"
                />
            </div>
            <div className="md:pl-3 w-2/3 sm:w-3/4">
                <div className="flex items-center justify-between w-full pt-1">
                    <p className="text-base font-black leading-none text-[#08DF9A]">
                        {comic.title}
                    </p>
                </div>
                <p className="text-xs leading-3 text-gray-500 pt-2 max-w-[85%]">
                    Description:{' '}
                    {typeof comic.description === 'string'
                        ? comic.description.substring(0, 30).concat('...')
                        : 'An awesome comic...'}
                </p>

                <div className="flex items-center justify-between pt-5 pr-6">
                    <div className="flex itemms-center">
                        <p className="text-xs leading-3 underline text-red-500 cursor-pointer">
                            <TrashIcon
                                onClick={removeFromCartHandler}
                                className="w-6"
                            />
                        </p>
                    </div>
                    <p className="text-base font-black leading-none text-[#08DF9A]">
                        ${(comic.price * quantity).toFixed(2)}
                    </p>
                </div>
                <p className="text-[#08DF9A] text-sm font-bold pt-2">
                    Quantity: {quantity}
                </p>
            </div>
        </div>
    );
}
