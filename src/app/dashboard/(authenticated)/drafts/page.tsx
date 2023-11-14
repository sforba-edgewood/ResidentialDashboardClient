'use client';
import DraftsTable from "@/app/dashboard/components/DraftsTable";
import { Metric } from "@tremor/react";
export default function Index() {

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
