/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif']
      },
      colors: {
        main: "#F40404",
        paragraph: "#6C6C6C",
        smokyBlack: "#282828",
        fadedBlack: "#1F1F1F",
        yellowOrange: "#FFB800",
        darken: "rgba(0, 0, 0, 0.6)",
        lightAsh: "#F0F0F0",
        lighten: "rgba(0, 0, 0, 0.5)"
      },
      maxWidth: {
        container: "1144px",
        halfContainer:"572px",
        mdContainer: "600px",
        smContainer: "330px",
      },
      backgroundImage: {
        'banner': "url('../public/images/banner.png')",
        'service1': "url('../public/images/service1.png')",
        'service2': "url('../public/images/service2.png')",
        'service3': "url('../public/images/service3.png')",
        'learn': "url('../public/images/learn_more.png')",
        'blog1': "url('../public/images/blog1.png')",
        'blog2': "url('../public/images/blog2.png')",
        'blog3': "url('../public/images/blog3.png')",
      },
      screens: {
        'sm': '375px',
        'md': '667px',
        'lg': '1240px',
      },
    },
  },
  plugins: [],
}
