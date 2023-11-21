'use client';
import {ChecklistProvider} from "@/app/providers/checklist_provider";
import CheckListForm from "@/app/dashboard/components/CheckListForm";
import { Metric } from "@tremor/react";
import { AuthContext } from "@/app/providers/auth_provider";
import { useContext } from "react";
import {redirect} from 'next/navigation';

export default function Index() {
  const context = useContext(AuthContext);
  const {authenticated} = context || {};

  // if(authenticated === 'unauthenticated') {
  //   redirect('/dashboard/login');
  // }

  return (
    <main>
      <Metric className="container text-center py-10">
        Weekly Checklist
      </Metric>
      <ChecklistProvider>
        <CheckListForm />
      </ChecklistProvider>
    </main>
  )
}
