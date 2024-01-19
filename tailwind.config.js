import { fontFamily } from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*',
    './index.html'
  ],
  theme: {
    extend: {
      colors: {
        'app-gray': '#eee',
        'app-black': '#0d0d0d',
        'app-green': '#54d4a0'
      },
      fontFamily: {
        raleway: ['Raleway', ...fontFamily.sans]
      }
    },
  },
  plugins: [],
}

