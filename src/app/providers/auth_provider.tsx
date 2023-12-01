'use client';
import { useRouter } from 'next/navigation';
import { createContext,  useState, useEffect, PropsWithChildren } from 'react';
export const AuthContext = createContext({});

export const AuthProvider = ({ children }: PropsWithChildren<{}>) => {
    const router = useRouter();
    const [authenticated, setAuthenticated] = useState<string>('init');
    const [email, setEmail]  = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [loginError, setLoginError] = useState<boolean>(false);

    useEffect(()=>{
        checkAuthStatus();
    },[]);

    const checkAuthStatus = async () => {
        try {
            await fetch("/api/auth/verify").then((verification)=>{
        
                if(verification?.status === 200) {
                    setAuthenticated('authenticated');
                } else {
                    setAuthenticated('unauthenticated');
                }
            }).catch((e)=>{
                setAuthenticated('unauthenticated');
                console.log(e);
            });

        } catch(e) {
            setAuthenticated('unauthenticated');
            return false;
        }

    }

    const login = async () => {
        try {
            const response = await fetch("/api/auth/login", {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({email, password})
            });
            
            if(response.status === 401) {
                setLoginError(true);
            } else {
                router.push('/dashboard/daily')
            }
            
        } catch(e) {
            console.error('error: ', e);
            setLoginError(true);
        }
    }

    const register = async () => {

    }

    const forgotPassword = async () => {
    }

    return(
        <AuthContext.Provider value={{authenticated, loginError, setLoginError, setEmail, setPassword, login, register}}>
            {children}
        </AuthContext.Provider>
    );
}

