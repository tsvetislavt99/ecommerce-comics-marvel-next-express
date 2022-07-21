import Cookies from 'js-cookie';

//TODO: Change URL when BE is deployed
const DEV_URL = 'https://e-commerce-back-end-marvel.herokuapp.com/auth';

export const login = async (username: string, password: string) => {
    const res = await fetch(`${DEV_URL}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    });

    const data = await res.json();

    return data;
};

export const logout = () => {
    try {
        Cookies.remove('CA_J7');
    } catch (error) {
        console.log(error);
    }
};
