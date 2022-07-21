import CartItem from '@/components/CartItem/CartItem';
import { Layout } from '@/components/Layout/Layout';
import { CartContext } from 'contexts/CartContext';
import React, { ReactElement, useContext } from 'react';

export default function Cart() {
    const { cart } = useContext(CartContext);
    return (
        <>
            <section className="max-w-[1240px] mx-auto">
                <div className="flex md:flex-row flex-col justify-around">
                    <div
                        className=" lg:w-1/2 w-full md:pl-10 pl-4 pr-10 md:pr-4 md:py-12 py-8 bg-zinc-900 overflow-y-visible overflow-x-hidden h-full sm:h-[80vh]"
                        id="cart"
                    >
                        {cart.products.length > 0 ? (
                            cart.products.map((comic: any, index: number) => (
                                <CartItem
                                    key={`${comic.comic.id}${index}`}
                                    comic={comic.comic}
                                    quantity={comic.quantity}
                                />
                            ))
                        ) : (
                            <h1 className="text-lg text-[#08DF9A] text-center">
                                No items in your cart :(
                            </h1>
                        )}
                    </div>
                    <div className="md:w-1/3 xl:w-1/4 w-full bg-zinc-800 lg:rounded-lg h-full">
                        <div className="flex flex-col md:h-[80vh] px-14 py-6 justify-between overflow-y-auto">
                            <div>
                                <p className="text-4xl font-black leading-9 text-[#08DF9A]">
                                    Summary
                                </p>
                                <div className="flex items-center justify-between pt-16">
                                    <p className="text-base leading-none text-[#08DF9A]">
                                        Subtotal
                                    </p>
                                    <p className="text-base leading-none text-[#08DF9A]">
                                        ${cart.price.toFixed(2)}
                                    </p>
                                </div>
                                <div className="flex items-center justify-between pt-5">
                                    <p className="text-base leading-none text-[#08DF9A]">
                                        Shipping
                                    </p>
                                    <p className="text-base leading-none text-[#08DF9A]">
                                        ${cart.shippingPrice}
                                    </p>
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center pb-6 justify-between lg:pt-5 pt-20">
                                    <p className="text-2xl leading-normal text-[#08DF9A]">
                                        Total
                                    </p>
                                    <p className="text-2xl font-bold leading-normal text-right text-[#08DF9A]">
                                        $
                                        {(
                                            cart.price + cart.shippingPrice
                                        ).toFixed(2)}
                                    </p>
                                </div>
                                <button
                                    disabled={cart.products.length === 0}
                                    className="text-base leading-none w-full py-5 bg-[#08DF9A] border-gray-800 border disabled:opacity-70 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 font-semibold text-zinc-800"
                                >
                                    Checkout
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <style jsx>
                {`
                    #cart::-webkit-scrollbar {
                        width: 1em;
                    }

                    #cart::-webkit-scrollbar-track {
                        box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
                    }

                    #cart::-webkit-scrollbar-thumb {
                        background-color: darkgrey;
                        outline: 1px solid slategrey;
                    }
                `}
            </style>
        </>
    );
}

Cart.getLayout = function getLayout(page: ReactElement) {
    return <Layout>{page} </Layout>;
};
