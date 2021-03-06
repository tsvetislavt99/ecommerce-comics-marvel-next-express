import Carousel from '@/components/Carousel/Carousel';
import { ComicCard } from '@/components/ComicCard/ComicCard';
import { Layout } from '@/components/Layout/Layout';
import Pagination from '@/components/Pagination/Pagination';
import { SidebarLayout } from '@/components/SidebarLayout/SidebarLayout';
import { getNeighbours } from 'lib/helpers';
import React, { ReactElement, useReducer } from 'react';

//TODO: Add correct comic type
type Props = {
    data: any[];
    total: number;
    page: number;
};

export async function getServerSideProps() {
    const res = await fetch(
        'https://e-commerce-back-end-marvel.herokuapp.com/comics/comics-page/0/28'
    );

    if (res.ok) {
        const data = await res.json();
        return {
            props: { data: data.data, total: data.total, page: data.page },
        };
    } else {
        //TODO: Think about handling errors here
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
                    id={comic._id}
                />
            ))}
            <Pagination
                currentPage={props.page}
                neighbours={getNeighbours}
                totalPages={Math.ceil(props.total / 28)}
            />
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
