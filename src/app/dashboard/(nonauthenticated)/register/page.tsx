'use client';

import { AuthContext } from "@/app/providers/auth_provider";
import { useContext, useEffect, useState } from "react";

const Register = () => {
    const context = useContext(AuthContext);
    const {setRegistrationData, register}: any = context || {};

    const [fullName, setFullName] = useState<string>('');
    const [email, setEmail]  = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const [registrationValidation, setRegistrationValidation] = useState<boolean>(false);


    useEffect(()=> {
        if(fullName && email && password && confirmPassword && (confirmPassword === password)) {
            setRegistrationValidation(true);
        }
    }, [email, password, confirmPassword, fullName]);

    const handleEmailInput = (e: React.FormEvent<HTMLInputElement>): void => {
        const input = e.currentTarget.value;
        setEmail(input);
    }

    const handleFullNameInput = (e: React.FormEvent<HTMLInputElement>): void => {
        const input = e.currentTarget.value;
        setFullName(input);
    }

    const handlePasswordInput = (e: React.FormEvent<HTMLInputElement>): void => {
        const input = e.currentTarget.value;
        setPassword(input);
    }

    const handleConfirmPasswordInput = (e: React.FormEvent<HTMLInputElement>): void => {
        const input = e.currentTarget.value;
        setConfirmPassword(input);
    }

    const handleSubmit = async (e: React.SyntheticEvent)=> {
        e.preventDefault();
        const registrationObj = {
            "email":email, "password": password, "fullName":fullName, "role": "USER"
        }
        await register(registrationObj);
        
    }

    return(
        <div className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Create and account
                        </h1>
                        <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6" action="#">
                            <div>
                                <label htmlFor="fullName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
                                <input onChange={handleFullNameInput} type="text" name="fullName" id="fullName" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your Name" required={true} />
                            </div>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                <input onChange={handleEmailInput}  type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required={true} />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <input onChange={handlePasswordInput}  type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required={true} />
                            </div>
                            <div>
                                <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                                <input onChange={handleConfirmPasswordInput} type="confirm-password" name="confirm-password" id="confirm-password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required={true} />
                            </div>
                            <button type="submit" disabled={!registrationValidation} className={`${registrationValidation ? 'bg-blue-700':'bg-red-400'} w-full text-white  hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800`}>Create an account</button>
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Already have an account? <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;