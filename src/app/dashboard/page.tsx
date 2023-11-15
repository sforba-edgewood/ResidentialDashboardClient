'use client';
import { useState } from 'react';
import { redirect } from 'next/navigation';


const Index  = () => {
    const [authenticated, setAuthenticated] = useState(false);
    const checkAuthStatus = async () => {
        try {
            const response = await fetch("/api/auth/verify");
            const data = await response.json()
            return data?.verification;
        } catch(e) {
            return false;
        }

    }
    const authenticationStatus = checkAuthStatus();

    authenticationStatus.then((status)=>{
        console.log(status);
        setAuthenticated(status);
    })
    
    if(authenticated) {
        redirect('/dashboard/daily');
    } else {
        redirect('/dashboard/login');
    }
}

export default Index;