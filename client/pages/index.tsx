import type { ReactElement } from 'react';
import { Layout } from '@/components/Layout/Layout';
import { NestedLayout } from '@/components/SidebarLayout/SidebarLayout';
import { Sidebar } from '@/components/Sidebar/Sidebar';

export default function Home() {
    return <div></div>;
}

Home.getLayout = function getLayout(page: ReactElement) {
    return <Layout>{page} </Layout>;
};
