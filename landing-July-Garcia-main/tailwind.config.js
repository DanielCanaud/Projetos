/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          500: "#F97316",
          600: "#EA580C",
        },
      },
      animation: {
        "fade-in": "fadeIn 600ms ease-out 0.2s forwards",
        "fade-in-up": "fadeInUp 600ms ease-out forwards",
        "float-slow": "floatSlow 8s ease-in-out infinite",
        "float-reverse": "floatReverse 10s ease-in-out infinite",
        "float-medium": "floatMedium 7s ease-in-out infinite",
        "float-slow-reverse": "floatSlowReverse 9s ease-in-out infinite",
        "gradient-shift": "gradientShift 15s ease infinite",
        "icon-bounce": "iconBounce 600ms ease-in-out",
      },
      keyframes: {
        fadeIn: {
          "from": { opacity: "0" },
          "to": { opacity: "1" },
        },
        fadeInUp: {
          "from": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "to": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        floatSlow: {
          "0%, 100%": {
            transform: "translate(0, 0px)",
          },
          "50%": {
            transform: "translate(-20px, 30px)",
          },
        },
        floatReverse: {
          "0%, 100%": {
            transform: "translate(0, 0px)",
          },
          "50%": {
            transform: "translate(20px, -30px)",
          },
        },
        floatMedium: {
          "0%, 100%": {
            transform: "translate(0, 0px)",
          },
          "33%": {
            transform: "translate(15px, 20px)",
          },
          "66%": {
            transform: "translate(-10px, -25px)",
          },
        },
        floatSlowReverse: {
          "0%, 100%": {
            transform: "translate(0, 0px)",
          },
          "40%": {
            transform: "translate(-25px, 15px)",
          },
          "80%": {
            transform: "translate(20px, -20px)",
          },
        },
        gradientShift: {
          "0%": {
            "background-position": "0% 50%",
          },
          "50%": {
            "background-position": "100% 50%",
          },
          "100%": {
            "background-position": "0% 50%",
          },
        },
      },
    },
  },
  plugins: [],
};
