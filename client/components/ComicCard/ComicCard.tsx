import { PlusIcon } from '@heroicons/react/solid';
import { useCart } from 'contexts/CartContext';
import { useUser } from 'contexts/UserContext';
import { addComicToCart } from 'services/cartService';

type Props = {
    title: string;
    thumbnail: {
        path: string;
        extension: string;
    };
    price: number;
    id: string;
};

export const ComicCard = (props: Props) => {
    const { id } = useUser();
    const { setCart } = useCart();

    const addToCartHandler = async () => {
        try {
            const newCart = await addComicToCart(id, props.id);
            setCart(newCart.cart);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div
            style={{
                backgroundImage: `url("${props.thumbnail}")`,
                backgroundSize: '100%',
            }}
            className="col-span-1 max-h-44 h-44 mb-12 max-w-[95%] w-[93%] rounded-2xl"
        >
            <div className="flex flex-col flex-nowrap justify-between h-full bg-gradient-to-t from-transparent to-gray-900 rounded-xl">
                <div className="m-2">
                    <h2 className="text-xs text-white font-semibold">
                        {props.title}
                    </h2>
                    <div className="flex flex-row flex-nowrap text-[#00DF9A]">
                        ${props.price || '--.--'}
                    </div>
                </div>
                <div>
                    <div className="flex flex-row flex-nowrap justify-between mx-2 my-2">
                        <button
                            onClick={addToCartHandler}
                            className="px-2 md:px-5 py-2 bg-gray-600/90 rounded-2xl hover:text-[#00DF9A]"
                        >
                            <PlusIcon className="h-4" />
                        </button>
                        <button className="px-4 2xl:px-5 py-2 bg-[#00DF9A] rounded-2xl text-[#16181E] hover:text-[#F9F9F9] text-xs font-semibold">
                            Details
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
