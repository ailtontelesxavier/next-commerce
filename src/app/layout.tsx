import type { Metadata } from 'next'
import clsx from 'clsx'
import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from './components/NavBar'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Next Ecommerce',
  description: 'Next Ecommerce',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={clsx(inter.className, 'bg-slate-700')}>
        <NavBar/>
        <main className='bg-slate-700 h-screen p-16'>
          {children}
        </main>
      </body>
    </html>
  )
}
