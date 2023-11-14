'use client';
import {ChecklistProvider} from "@/app/providers/checklist_provider";
import CheckListForm from "@/app/dashboard/components/CheckListForm";
import { Metric } from "@tremor/react";

export default function Index() {
  return (
    <main>
      <Metric className="container text-center py-10">
      </Metric>
      <ChecklistProvider>
        <CheckListForm formType={'DAILY'}/>
      </ChecklistProvider>
    </main>
  )
}

