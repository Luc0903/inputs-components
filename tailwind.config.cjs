/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: ['./src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    maxWidth: {
      'max-w-xxs': '18rem',
    },
    extend: {
      spacing: {
        50: '12.5rem',
        38: '9.375rem',
      },
    },
    fontFamily: {
      poppins: ['Poppins', ...defaultTheme.fontFamily.sans],
      ubuntuMono: ['Ubuntu Mono', ...defaultTheme.fontFamily.sans],
      NotoSansJP: ['Noto Sans JP', ...defaultTheme.fontFamily.sans],
    },
    colors: {
      sidebar: '#FAFBFD',
      title_orange: '#F7542E',
      title_blue: '#090F31',
      navlinks: '#9E9E9E',
      default__input: '#828282',
      default__hover: '#333333',
      default__focus: '#2962FF',
      input__error: '#D32F2F',
      input__disabled: '#E0E0E0',
      input__disabled__bg: '#F2F2F2',
    },
  },
  plugins: [],
};
