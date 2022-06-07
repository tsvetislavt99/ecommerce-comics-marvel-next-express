import { Layout } from '@/components/Layout/Layout';
import { ProfileLayout } from '@/components/ProfileLayout/ProfileLayout';
import { useUser } from 'contexts/UserContext';
import React, { ReactElement } from 'react';

export default function Profile() {
    const userData = useUser();

    console.log(userData);

    return <div>index</div>;
}

Profile.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout>
            <ProfileLayout>{page}</ProfileLayout>
        </Layout>
    );
};
