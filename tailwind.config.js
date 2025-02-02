/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    fontFamily: {
      irSans: ["IranSans"],
    },
    screens: {
      xs: "300px",
      // => @media (min-width: 300px) { ... }

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      boxShadow: {
        "shadowPrimaryFront" : '0px 0px 12px rgba(51,141,129,0.4)',
        "shadowSecondaryFront" : '0px 0px 12px rgba(204,163,73,0.4)',
        "shadowDarkFront" : '0px 0px 12px rgba(255,255,255,0.4)',
        "shadowDarkUp" : '0px 5px 6px rgba(255,255,255,0.2)',
        
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        26: "6.5rem",
        30: "7.5rem",
      },
      colors: {
        primary: "#338D81",
        secondary: "#CCA349",
        zgh: "#CCA349",
        daste: "#F0F0F0",
        course: "#F0F0F0",
        send: "#6ACA56",
        pannel : "#46A194",
        mygray : '#F3F3F3',
      },

      backgroundImage: {
        line: "url('./line.svg')",
        bgLogRegFor: "url('./bgLog.svg')",
        headerSvg: "url('src/assets/images/headerShape.svg')",
        magnifier :  "url('./magnifier.png')",
        courseIcon :  "url('./courseIcon.png')",
        like : "url('./like1.png')"
      },

      backgroundSize: {
        80: "80%",
      },

      backgroundPosition: {
        "top-4": "center top 8rem",
      },
    },
    
  },
  plugins: [],
};
