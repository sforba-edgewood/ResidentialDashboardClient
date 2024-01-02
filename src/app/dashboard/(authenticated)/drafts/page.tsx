'use client';
import DraftsTable from "@/app/dashboard/components/DraftsTable";
import { Metric } from "@tremor/react";
import { AuthContext } from "@/app/providers/auth_provider";
import { useContext } from "react";
import {redirect} from 'next/navigation';

export default function Index() {
  const context = useContext(AuthContext);
  const {authenticated} = context || {};

  if(authenticated === 'unauthenticated') {
    console.log('hello world');
    redirect('/dashboard/login');
  }

  return (
    <main>
      <Metric className="container text-center  py-10">
        Drafts
      </Metric>
      <div className="mx-auto container">
        <div className="max-w-6xl mx-auto">
          <DraftsTable />
        </div>

      </div>

    </main>
  )
}
