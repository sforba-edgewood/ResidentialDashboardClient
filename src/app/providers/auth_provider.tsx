'use client';
import { useRouter } from 'next/navigation';
import { createContext,  useState, useEffect } from 'react';
export const AuthContext = createContext({});

export const AuthProvider = props => {
    const router = useRouter();
    const [authenticated, setAuthenticated] = useState(false);
    const [email, setEmail]  = useState('');
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState(false);

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
        <AuthContext.Provider value={{loginError, setLoginError, setEmail, setPassword, login, register}}>
            {props.children}
        </AuthContext.Provider>
    );
}

