import { Layout } from '@/components/Layout/Layout';
import React, { ReactElement, useState } from 'react';

export default function Register() {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [rePassword, setRePassword] = useState<string>('');

    const handleFormSubmit = (e: any) => {
        e.preventDefault();
    };

    const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const handleRePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRePassword(e.target.value);
    };

    const isValid = username && password && password === rePassword;

    return (
        <div className="h-max flex bg-gray-bg1 sm:mt-10 text-[#00DF9A]">
            <div className="w-full max-w-md m-auto bg-zinc-900 sm:rounded-lg border-y sm:border border-[#00DF9A] shadow-default py-10 px-16">
                <h1 className="text-lg sm:text-2xl font-medium text-primary mt-4 mb-12 text-center">
                    Create an account 🔐
                </h1>

                <form className="text-white" onSubmit={handleFormSubmit}>
                    <div>
                        <label htmlFor="username">Username</label>
                        <input
                            value={username}
                            onChange={handleUsernameChange}
                            type="username"
                            className={`w-full p-2 text-primary text-zinc-900 border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                            id="username"
                            placeholder="john_d0e"
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input
                            value={password}
                            onChange={handlePasswordChange}
                            type="password"
                            className={`w-full p-2 text-primary text-zinc-900 border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                            id="password"
                            placeholder="**********"
                        />
                    </div>
                    <div>
                        <label htmlFor="rePassword">Password</label>
                        <input
                            value={rePassword}
                            onChange={handleRePasswordChange}
                            type="password"
                            className={`w-full p-2 text-primary text-zinc-900 border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                            id="rePassword"
                            placeholder="**********"
                        />
                    </div>

                    <div className="flex justify-center items-center mt-6">
                        <button
                            disabled={!isValid}
                            className={`bg-[#00DF9A] py-2 px-4 text-sm text-zinc-900 rounded border border-[#00DF9A] focus:outline-none focus:border-green-700 disabled:opacity-60`}
                        >
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

Register.getLayout = function getLayout(page: ReactElement) {
    return <Layout>{page}</Layout>;
};
