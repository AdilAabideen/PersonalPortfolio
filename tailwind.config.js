/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
      '3xl': '1800px',
    },
    extend: {
      fontFamily: {
        'gotham-bold': ['Gotham-Bold', 'sans-serif'],
        'gotham-medium': ['Gotham-Medium', 'sans-serif'],
        'gotham-narrow' : ['GothamNarrow-Bold', 'sans-serif'],
        'gotham-light' : ['Gotham-Light', 'sans-serif']
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },

    },
  },

};
