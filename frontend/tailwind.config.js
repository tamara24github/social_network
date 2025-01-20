/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundSize: {
        "160x180": "160px 180px",
      },

      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(50px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulse: {
          "0%": {
            transform: "scale(1)",
            opacity: "1",
            color: "#00ffff",
            textShadow:
              "0 0 8px rgba(255, 255, 255, 0.7), 0 0 15px rgba(0, 255, 255, 0.7)",
          },
          "25%": {
            transform: "scale(1.1)",
            opacity: "1",
            color: "#ff0077",
            textShadow:
              "0 0 12px rgba(255, 255, 255, 0.9), 0 0 20px rgba(0, 255, 255, 0.9)",
          },
          "50%": {
            transform: "scale(1)",
            opacity: "1",
            color: "#00ffff",
            textShadow:
              "0 0 8px rgba(255, 255, 255, 0.7), 0 0 15px rgba(0, 255, 255, 0.7)",
          },
          "75%": {
            transform: "scale(1.1)",
            opacity: "1",
            color: "#ff0077",
            textShadow:
              "0 0 12px rgba(255, 255, 255, 0.9), 0 0 20px rgba(0, 255, 255, 0.9)",
          },
          "100%": {
            transform: "scale(1)",
            opacity: "1",
            color: "#00ffff",
            textShadow:
              "0 0 8px rgba(255, 255, 255, 0.7), 0 0 15px rgba(0, 255, 255, 0.7)",
          },
        },
        "fluid-border": {
          "0%": { borderColor: "#00ffff" },
          "50%": { borderColor: "#ff0077" },
          "100%": { borderColor: "#00ffff" },
        },
      },

      animation: {
        "fluid-border": "fluid-border 4s ease-in-out infinite",
        fadeIn: "fadeIn 1.5s ease-out forwards",
        pulse: "pulse 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
