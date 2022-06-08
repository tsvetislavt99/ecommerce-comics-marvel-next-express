export const getFetcher = async (uri: string, token: string | undefined) => {
    try {
        const res = await fetch(uri, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
        });

        const data = await res.json();

        return await data;
    } catch (error) {}
};
