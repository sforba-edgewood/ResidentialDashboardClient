'use client';
import { AuthContext } from "@/app/providers/auth_provider";
import { useContext } from "react";
import {redirect} from 'next/navigation';

export default function Index() {
  const context = useContext(AuthContext);
  // const {authenticated} = context || {};

  return (
    <main>
      Profile Page
    </main>
  )
}
  