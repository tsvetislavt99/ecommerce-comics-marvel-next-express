import React, { useState, useEffect } from 'react';
import { SidebarCard } from '../SidebarCard/SidebarCard';
import { getRandomArbitrary } from 'lib/helpers';
const BASE_URL = 'https://gateway.marvel.com:443/v1/public';

type TrendingState = {
    status: 'waiting' | 'success' | 'failed' | 'empty';
    data: {
        thumbnail: {
            path: string;
            extension: string;
        };
        comics: {
            available: number;
        };
        name: string;
        id: number;
    }[];
    error?: any;
};

type Hero = {
    thumbnail: {
        path: string;
        extension: string;
    };
    comics: {
        available: number;
    };
    name: string;
    id: number;
};

export async function getServerSideProps() {
    const res = await fetch(
        `${BASE_URL}/characters?orderBy=-modified&limit=30&offset=${getRandomArbitrary(
            0,
            1000
        )}&apikey=${process.env.REACT_APP_MARVEL_API_KEY}`
    );
    const data = await res.json();
}

export const Sidebar = () => {
    const [trendingNow, setTrendingNow] = useState<TrendingState>({
        status: 'empty',
        data: [],
        error: null,
    });

    useEffect(() => {
        if (trendingNow.status === 'empty') {
            setTrendingNow((initValue) => ({
                ...initValue,
                status: 'waiting',
            }));
            const getChars = async () => {
                try {
                    const res = await fetch(
                        `${BASE_URL}/characters?orderBy=-modified&limit=30&offset=${getRandomArbitrary(
                            0,
                            1000
                        )}&apikey=760cf7beb5fa6ffd51c0d558c1605db4`
                    );
                    const data = await res.json();

                    const charData = data.data.results
                        .filter(
                            (char: Hero) =>
                                !char.thumbnail.path.includes('image_not')
                        )
                        .filter((char: Hero) => char.comics.available !== 0)
                        .slice(0, 10);

                    setTrendingNow((initValue) => ({
                        ...initValue,
                        status: 'success',
                        data: charData,
                    }));
                } catch (error) {
                    setTrendingNow((initValue) => ({
                        ...initValue,
                        status: 'failed',
                        error: error,
                    }));
                }
            };

            getChars();
        }
    }, [trendingNow]);

    const trendingNowContent = trendingNow.data.map((hero) => (
        <SidebarCard
            key={hero.id}
            thumbnail={hero.thumbnail}
            name={hero.name}
            comicsAvailable={hero.comics.available}
        />
    ));

    if (trendingNow.status === 'waiting') {
        return <div>Meow</div>;
    }

    if (trendingNow.error) {
        return (
            <div className="hidden sm:block col-start-2 col-end-4 row-span-full">
                <h2 className="text-xl text-center text-[#00DF9A] my-3 font-mono">
                    Trending now
                </h2>
                <ul>
                    <li>Seems like we could not find anything trending</li>
                </ul>
            </div>
        );
    }

    return (
        <div className="hidden lg:block col-start-2 col-end-4 row-span-full">
            <h2 className="text-xl text-center text-[#00DF9A] my-3 font-mono">
                Trending now
            </h2>
            <ul>{trendingNowContent}</ul>
        </div>
    );
};
