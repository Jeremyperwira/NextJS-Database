import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {

      gridTemplateColumns: {
        '13': 'repeat(13, minmax(0, 1fr))',
      },
      colors: {
        blue: {
          400: '#2589FE',
          500: '#0070F3',
          600: '#2F6FEB',
        },
      },
    },
    keyframes: {

      typing: {
        "0%": {
          width: "0%",
          visibility: "hidden"
        },
        "100%": {
          width: "100%"
        }  
      },

      blink: {
        "50%": {
          borderColor: "transparent"
        },
        "100%": {
          borderColor: "white"
        }  
      },

      shimmer: {
        '100%': {
          transform: 'translateX(100%)',
        },
      },
    },
    animation: {
      typing: "typing 2s steps(20) infinite alternate, blink .7s infinite"
    }
  },
  plugins: [require('@tailwindcss/forms')],

  
};
export default config;
