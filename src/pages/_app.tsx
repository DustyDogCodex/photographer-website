import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'

export default function App({ Component, pageProps }: AppProps) {
    const path = usePathname()

    return (
        <AnimatePresence mode='wait'>
            <motion.div key={path}>
                <Component {...pageProps} />

                {/* page sliding in animation */}
                <motion.div
                    className='absolute top-0 left-0 w-full h-screen bg-indigo-500 origin-bottom'
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 0 }}
                    exit={{ scaleY: 1 }}
                    transition={{ duration: 1, ease: [ 0.22, 1, 0.36, 1 ]}}
                />

                {/* page sliding out animation */}
                <motion.div 
                    className='absolute top-0 left-0 w-full h-screen bg-indigo-500 origin-top'
                    initial={{ scaleY: 1 }}
                    animate={{ scaleY: 0 }}
                    exit={{ scaleY: 0 }}
                    transition={{ duration: 1, ease: [ 0.22, 1, 0.36, 1 ]}}
                />
            </motion.div>
        </AnimatePresence>
    )
}
