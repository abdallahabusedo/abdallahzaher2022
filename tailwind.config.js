/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      xs: "200px",
      // => @media (min-width: 200px) {... }

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) {... }
    },
    clipPath: {
      main: "polygon(0 0, 0 0, 0 100%, 0 100%)",
      active: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
    },
    textFillColor: (theme) => theme("borderColor"),
    textStrokeColor: (theme) => theme("borderColor"),
    textStrokeWidth: (theme) => theme("borderWidth"),
  },
  plugins: [
    require("tailwind-clip-path"),
    require("tailwindcss-text-fill-stroke"),
  ],
};
