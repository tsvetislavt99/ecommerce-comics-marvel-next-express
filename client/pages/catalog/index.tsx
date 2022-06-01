import { ComicCard } from '@/components/ComicCard/ComicCard';
import { Layout } from '@/components/Layout/Layout';
import { NestedLayout } from '@/components/SidebarLayout/SidebarLayout';
import React, { ReactElement } from 'react';

type Props = {
    data: any[];
};

export async function getStaticProps() {
    const res = await fetch('http://localhost:8088/comics/all-comics');
    if (res.ok) {
        const data = await res.json();
        return { props: { data } };
    } else {
        return { props: {} };
    }
}

export default function Catalog(props: Props) {
    console.log(props);
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center">
            {props.data.map((comic) => (
                <ComicCard
                    key={comic.id}
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
            <NestedLayout>{page}</NestedLayout>
        </Layout>
    );
};
