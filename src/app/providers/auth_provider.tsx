'use client';
import { useRouter } from 'next/navigation';
import { createContext,  useState, useEffect } from 'react';
export const AuthContext = createContext({});

export const AuthProvider = (props:any) => {
    const router = useRouter();
    const [authenticated, setAuthenticated] = useState('init');
    const [email, setEmail]  = useState('');
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState(false);

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
            {props.children}
        </AuthContext.Provider>
    );
}

