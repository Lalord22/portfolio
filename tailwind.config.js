/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#00050F',
        textPrimary: '#E5F4FF',
        textAccent: '#75BCEA',
        card: '#004666',
        button: '#75BCEA',
      },
      fontFamily: {
        display: ['Lora', 'serif'],
        body: ['Manrope', 'sans-serif'],
      },
      boxShadow: {
        card: '0 18px 42px rgba(0, 70, 102, 0.45)',
      },
    },
  },
  plugins: [],
}

