'use client';
import { useRouter } from 'next/navigation';
import { createContext,  useState, useEffect, PropsWithChildren } from 'react';
export const AuthContext = createContext({});

export const AuthProvider = ({ children }: PropsWithChildren<{}>) => {
    const router = useRouter();

    const [authenticated, setAuthenticated] = useState<string>('init');
    const [loginData, setLoginData]  = useState({email: "", password: ""});
    const [currentUser, setCurrentUser]  = useState(null);
    const [loginError, setLoginError] = useState<boolean>(false);

    useEffect(()=>{
        checkAuthStatus();

    },[]);

    const checkAuthStatus = async () => {
        try {
            const auth_check = await fetch("/api/auth/verify").then((data)=>{
                const json = data.json();
                return json;
            });
            const {verification, user} = auth_check;
            if(verification) {
                setCurrentUser(user);
                setAuthenticated('authenticated');
            } else {
                setAuthenticated('unauthenticated');
            } 
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
                body: JSON.stringify({...loginData})
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

    const register = async (registrationData: any) => {
        try {
            const response = await fetch("/api/auth/register", {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({...registrationData})
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

    const forgotPassword = async () => {
    }

    return(
        <AuthContext.Provider value={{authenticated, loginError, currentUser, setLoginData, setLoginError, login, register}}>
            {children}
        </AuthContext.Provider>
    );
}

