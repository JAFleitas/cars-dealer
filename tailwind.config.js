/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      keyframes:{
        openSideMenu:{
          "0%":{width:"0px"},
          "100%":{width:{sm:"100%",lg:"16rem"}}
        },closeSideMenu:{
          "0%":{width:{sm:"100%",lg:"16rem"}},
          "100%":{width:"0px"},
        }
      },
      animation:{
        openSideMenu:"openSideMenu 0.5s ease-in-out forwards",
        
        closeSideMenu:"closeSideMenu 0.5s ease-in-out forwards"
      }
    },
   
  },
  plugins: [],
}