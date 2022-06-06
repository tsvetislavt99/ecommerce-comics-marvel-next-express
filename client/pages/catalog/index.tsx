import Carousel from '@/components/Carousel/Carousel';
import { ComicCard } from '@/components/ComicCard/ComicCard';
import { Layout } from '@/components/Layout/Layout';
import { SidebarLayout } from '@/components/SidebarLayout/SidebarLayout';
import React, { ReactElement } from 'react';

//TODO: Add correct comic type
type Props = {
    data: any[];
};

//TODO: Add pagination
export async function getStaticProps() {
    const res = await fetch('http://localhost:8089/comics/all-comics', {
        credentials: 'include',
    });
    if (res.ok) {
        const data = await res.json();
        return { props: { data } };
    } else {
        return { props: {} };
    }
}

export default function Catalog(props: Props) {
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center">
            <div className="col-span-full w-full mb-10">
                <Carousel />
            </div>
            {props.data.map((comic) => (
                <ComicCard
                    key={comic._id}
                    title={comic.title}
                    price={comic.price}
                    thumbnail={comic.thumbnail}
                />
            ))}
        </div>
    );
}

Catalog.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout>
            <SidebarLayout>{page}</SidebarLayout>
        </Layout>
    );
};
