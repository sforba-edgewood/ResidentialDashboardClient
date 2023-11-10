'use client';
import { createContext,  useState, useEffect } from 'react';
export const AuthContext = createContext({});

export const AuthProvider = props => {
    const [authenticated, setAuthenticated] = useState(false);
    const [email, setEmail]  = useState('');
    const [password, setPassword] = useState('');

    const login = async () => {
        try {
            
            const response = await fetch("/api/auth/login", {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({email, password})
            });

            console.log(response);
            
        } catch(e) {
            console.log(e);
        }
    }

    const register = async () => {

    }
    return(
        <AuthContext.Provider value={{authenticated, setAuthenticated, setEmail, setPassword, login, register}}>
            {props.children}
        </AuthContext.Provider>
    );
}

