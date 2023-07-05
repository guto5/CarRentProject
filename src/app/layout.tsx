import 'react-toastify/dist/ReactToastify.css';
import './globals.css'
import { Inter } from 'next/font/google'
import { ToastContainer } from 'react-toastify';

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>{children}</body>
      <ToastContainer />
    </html>
  )
}
