/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './Components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      '2xl': { max: '1535px' },
      xl: { max: '1279px' },
      lg: { max: '1023px' },
      md: { max: '767px' },
      sm: { max: '639px' },
      xs: { max: '380px' },
    },
    extend: {
      colors: {
        lightText: '#989FA4',
        primaryDarkBlue: '#19185A',
        primaryLightBlue: '#0730AF',
        primaryOrange: '#FFC859',
        secondaryLightBlue: '#F2F7FB',
        secondaryGray: '#F3F2F7',
      },
    },
  },
  plugins: [],
};
