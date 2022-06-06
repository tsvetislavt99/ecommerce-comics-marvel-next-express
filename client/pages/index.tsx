import type { ReactElement } from 'react';
import { Layout } from '@/components/Layout/Layout';
import { Hero } from '@/components/Hero/Hero';

export default function Home() {
    return (
        <div>
            <Hero />
        </div>
    );
}

Home.getLayout = function getLayout(page: ReactElement) {
    return <Layout>{page} </Layout>;
};
