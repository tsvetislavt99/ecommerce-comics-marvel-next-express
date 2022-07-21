import Cookies from 'js-cookie';
import { getFetcher } from 'lib/fetchers';
import { createContext, useContext, useEffect, useState } from 'react';
import useSWR from 'swr';

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
    if (token) {
        const { data, error } = useSWR(
            ['https://e-commerce-back-end-marvel.herokuapp.com/auth/me', token],
            getFetcher
        );
        const [user, setUser] = useState(initialValue);
        useEffect(() => {
            if (data) {
                setUser(() => ({
                    username: data.user.username,
                    id: data.user.id,
                }));
            }
        }, [data]);

        return (
            <UserContext.Provider
                value={{ username: user.username, id: user.id }}
            >
                {children}
            </UserContext.Provider>
        );
    } else {
        return (
            <UserContext.Provider value={{ username: '', id: '' }}>
                {children}
            </UserContext.Provider>
        );
    }
};

export const useUser = () => {
    const authState = useContext(UserContext);

    return authState;
};
