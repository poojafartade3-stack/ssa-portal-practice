/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0, transform: "translateY(-5px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        fadeInUp: {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        slideDown: {
          "0%": { opacity: 0, transform: "translateY(-10px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        slideLeft: {
          "0%": { opacity: 0, transform: "translateX(-40px)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
        fadeInSlow: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },

        /* ⭐ MAIN ANIMATION FOR FULL HOMEPAGE */
        pageSlideIn: {
          "0%": { opacity: 0, transform: "translateX(-50px)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
      },

      animation: {
        fadeIn: "fadeIn 0.2s ease-in-out",
        fadeInUp: "fadeInUp 1s ease-out forwards",
        fadeInSlow: "fadeInSlow 1.2s ease-out forwards",
        slideDown: "slideDown 0.3s ease-in-out",
        slideLeft: "slideLeft 1s ease-out forwards",

        /* ⭐ HomePage uses this animation */
        pageSlideIn: "pageSlideIn 0.6s ease-out forwards",
      },
    },
  },
  plugins: [],
};
