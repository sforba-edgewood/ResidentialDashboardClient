'use client';
import { useState } from 'react';
import { redirect } from 'next/navigation';
import { AuthContext } from "@/app/providers/auth_provider";
import { useContext, useEffect } from "react";

const Index  = () => {
    const context = useContext(AuthContext);
    const {authenticated} = context || {};

    if(authenticated) {
        redirect('/dashboard/daily');
    } else {
        redirect('/dashboard/login');
    }
}

export default Index;