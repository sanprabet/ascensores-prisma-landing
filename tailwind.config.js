/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'white-background': '#ededfa',
        'black-text': "#050315",
        'blue-primary': "#303091",
        'blue-secondary': "#DEDCFF",
        'blue-accent': "#433BFF",
        'red-primary': "#EE1923",
      }
    },
  },
  plugins: [],
}

