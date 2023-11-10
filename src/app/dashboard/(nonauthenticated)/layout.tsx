
import '../../globals.css'
import Header from '@/app/Header'
import { AuthProvider } from '@/app/providers/auth_provider'

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
          <AuthProvider>
            <Header />
            <div>
                {children}
            </div>
          </AuthProvider>
        </body>
    </html>
  )
}
