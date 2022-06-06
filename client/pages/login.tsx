import { Layout } from '@/components/Layout/Layout';
import React, { ReactElement } from 'react';
import { login } from 'services/authService';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';

export default function Login() {
    const router = useRouter();

    const handleFormSubmit = async (e: any) => {
        e.preventDefault();
        let username = e.target.elements.username?.value;
        let password = e.target.elements.password?.value;
        const data = await login(username, password);
        if (data.message === 'Success!') {
            Cookies.set('CA_J7', data.token);
            router.replace('/');
        } else {
            //TODO: Add notification and error handling :)
            console.log(data);
        }
    };
    return (
        <div className="h-max flex bg-gray-bg1 mt-10 text-[#00DF9A]">
            <div className="w-full max-w-md m-auto bg-zinc-900 rounded-lg border border-[#00DF9A] shadow-default py-10 px-16">
                <h1 className="text-2xl font-medium text-primary mt-4 mb-12 text-center">
                    Log in to your account 🔐
                </h1>

                <form className="text-white" onSubmit={handleFormSubmit}>
                    <div>
                        <label htmlFor="username">Username</label>
                        <input
                            type="username"
                            className={`w-full p-2 text-primary text-zinc-900 border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                            id="username"
                            placeholder="john_d0e"
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            className={`w-full p-2 text-primary text-zinc-900 border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                            id="password"
                            placeholder="**********"
                        />
                    </div>

                    <div className="flex justify-center items-center mt-6">
                        <button
                            className={`bg-[#00DF9A] py-2 px-4 text-sm text-zinc-900 rounded border border-[#00DF9A] focus:outline-none focus:border-green-dark`}
                        >
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

Login.getLayout = function getLayout(page: ReactElement) {
    return <Layout>{page}</Layout>;
};
