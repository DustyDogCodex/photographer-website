import type { Metadata } from 'next'
import { Permanent_Marker, Inconsolata } from 'next/font/google'
import './globals.css'
import NavBar from '@/components/Navbar'

const marker = Permanent_Marker({ subsets: ['latin'], display: 'swap', weight: '400' })
const inconsolata = Inconsolata({ subsets: ['latin'], display: 'swap', weight: '400' })

export const metadata: Metadata = {
  title: 'Photography Portfolio',
  description: 'portfolio website for a photographer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
        <body className={`${marker.className} ${inconsolata.className}`}>
            <NavBar />
            {children}
        </body>
    </html>
  )
}
