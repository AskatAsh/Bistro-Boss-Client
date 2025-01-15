import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        "cinzel": ["Cinzel", "serif"]
      },
      colors: {
        text: '#ffffff',
        background: '#141414',
        primary: '#eeff25',
        secondary: '#dddbff',
        accent: '#eeff25',
        dark1: '#151515',
        footerbg1: '#1F2937',
        footerbg2: '#111827',
      },
    },
  },
  daisyui: {
    themes: ["light"],
  },
  plugins: [daisyui],
}

