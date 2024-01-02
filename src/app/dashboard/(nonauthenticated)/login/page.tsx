'use client';

import { AuthContext } from "@/app/providers/auth_provider";
import { useContext, useEffect, useState } from "react";
import { ExclamationIcon } from "@heroicons/react/solid";
import { Callout } from "@tremor/react";
import { redirect } from "next/navigation";
import Link from "next/link";
const Login = () => {
    const [email, setEmail]  = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const context = useContext(AuthContext);
    const {setLoginData, login, loginError, setLoginError, authenticated}: any = context || {};
    if(authenticated === 'authenticated') {
        redirect('/dashboard/daily');
    }

    const handleEmailInput = (e: React.FormEvent<HTMLInputElement>): void => {
        const input = e.currentTarget.value;
        setEmail(input);
    }

    const handlePasswordInput = (e: React.FormEvent<HTMLInputElement>): void => {
        const input = e.currentTarget.value;
        setPassword(input);
    }

    const handleSubmit = async (e: React.SyntheticEvent)=> {
        e.preventDefault();
        setLoginError(false);
        setLoginData({
            email, password
        });
        login();
    }

    return (
        <div className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen pb-48">
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Sign in to your account
                        </h1>
                        <form onSubmit={(e)=>{handleSubmit(e)}} className="space-y-4 md:space-y-6" action="#">
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                <input onChange={handleEmailInput} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required={true} />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <input onChange={handlePasswordInput} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required={true} />
                            </div>
                            <div className="flex items-center justify-between">
                                {/* <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required={true} />
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                                    </div>
                                </div> */}
                                <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                            </div>
                            {loginError && (
                                <Callout
                                    className="h-12 mt-4"
                                    title="Login Failed, please try again"
                                    icon={ExclamationIcon}
                                    color="rose"
                                >
                                    Login Failed, please try again
                                </Callout>
                            )}
                            <button type="submit" className="w-full bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                {/* Don't have an account yet? <Link href={'#'} className={`font-medium text-primary-600 hover:underline dark:text-primary-500`}>Sign up</Link> */}
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;