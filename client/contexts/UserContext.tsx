import Cookies from 'js-cookie';
import { createContext, useContext, useEffect, useState } from 'react';
import useSWR from 'swr';

const getFetcher = async (uri: string, token: string | undefined) => {
    const res = await fetch(uri, {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
    });

    const data = await res.json();

    return await data;
};

const initialValue = {
    username: '',
    id: '',
};
export const UserContext = createContext(initialValue);

type Props = {
    children: React.ReactNode;
};

type User = {
    username: string;
    id: string;
};

export const UserProvider = ({ children }: Props) => {
    const token = Cookies.get('CA_J7');
    const { data, error } = useSWR(
        ['http://localhost:8089/auth/me', token],
        getFetcher
    );
    const [user, setUser] = useState(initialValue);
    useEffect(() => {
        if (data) {
            setUser(() => ({ username: data.user.username, id: data.user.id }));
        }
    }, [data]);

    return (
        <UserContext.Provider value={{ username: user.username, id: user.id }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => {
    const authState = useContext(UserContext);

    return authState;
};
