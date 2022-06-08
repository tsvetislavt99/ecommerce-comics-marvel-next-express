import Cookies from 'js-cookie';

export const addComicToCart = async (userId: string, comicId: string) => {
    const token = Cookies.get('CA_J7');
    const res = await fetch('http://localhost:8089/cart/add-comic-to-cart', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ userId, comicId }),
    });

    if (res.ok) {
        const data = await res.json();
        return { cart: data.cart };
    } else {
        console.log(res);
        throw new Error('Could not add the comics to your cart!: ');
    }
};

export const removeComicFromCart = async (userId: string, comicId: string) => {
    const token = Cookies.get('CA_J7');
    const res = await fetch(
        'http://localhost:8089/cart/remove-comic-from-cart',
        {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({ userId, comicId }),
        }
    );

    if (res.ok) {
        const data = await res.json();
        return { cart: data.cart };
    } else {
        console.log(res);
        throw new Error('Could not add the comics to your cart!: ');
    }
};
