import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend:{ 
        colors: {
            'black-smoke': 'linear-gradient(180deg, #ffffff 0%, #FFF 100%)'
        },
    }
  },
  plugins: [],
}
export default config
