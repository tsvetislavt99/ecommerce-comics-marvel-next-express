import { useRouter } from 'next/router';
import { useLayoutEffect, useEffect } from 'react';
import { logout } from 'services/authService';

export default function Logout() {
    const useIsomorphicLayoutEffect =
        typeof window !== 'undefined' ? useLayoutEffect : useEffect;

    const router = useRouter();

    useIsomorphicLayoutEffect(() => {
        logout();
        router.replace('/');
    });

    //TODO: Add loading in case this screen is shown
    return <div>Loading...</div>;
}
