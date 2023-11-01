import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend:{ 
        backgroundImage: {
            'portfolio': '/public/portfolio.jpg',
            'title2': '/public/title2.jpg',
            'title3': '/title3.jpg',
            'title4': '/title4.jpg'
        }
    }
  },
  plugins: [],
}
export default config
