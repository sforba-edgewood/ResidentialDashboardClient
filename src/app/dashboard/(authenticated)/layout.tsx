'use client';
import { AppProvider } from "../../providers/app_provider";
import { SchemaProvider } from "@/app/providers/schema_provider";
import '../../globals.css'
import Header from '../../Header'
import Sidebar from '../components/Sidebar'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
          <Header />
          <AppProvider>
            <SchemaProvider>
              <div className='flex flex-row'>
                  <div className='w-[20%] flex-1 border-r-2'>
                      <Sidebar />
                  </div>
                  <div className='w-[80%]'>
                      {children}
                  </div>
              </div>
            </SchemaProvider>
          </AppProvider>
        </body>
    </html>
  )
}
