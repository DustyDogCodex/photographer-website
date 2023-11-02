import type { Metadata } from 'next'
import { Permanent_Marker, Inconsolata } from 'next/font/google'
import './globals.css'
import NavBar from '@/components/Navbar'

/* fonts being used */
const marker = Permanent_Marker({ 
    subsets: ['latin'], 
    display: 'swap', 
    weight: '400', 
    variable: '--font-marker' 
})

const inconsolata = Inconsolata({ 
    subsets: ['latin'], 
    display: 'swap', 
    weight: '400', 
    variable: '--font-inconsolata' 
})

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
        <body className={`${marker.variable} ${inconsolata.variable}`}>
            <NavBar />
            {children}
        </body>
    </html>
  )
}
