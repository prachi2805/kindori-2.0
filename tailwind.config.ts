/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        green: {
          10: "#ABCD52",
          30: "#23A455",
          50: "#30AF5B",
          90: "#292C27",
        },
        gray: {
          10: "#EEEEEE",
          20: "#A2A2A2",
          30: "#7B7B7B",
          40: "#777777",
          50: "#585858",
          60: "#271344",
          90: "#141414",
        },
        pink: {
          10: "#ff4880",
        },
        orange: {
          50: "#FF814C",
        },
        blue: {
          10: "#1AB9FF",
          70: "#021639",
        },
        purple: {
          10: "#351C5A",
        },
        yellow: {
          10: "#FFC000",
          50: "#FEC601",
        },
        black: {
          10: "#271344",
          20: "#201B1B",
        },
        red: {
          10: "#FF6666",
        },
      },
      backgroundImage: {
        "bg-img-1": "url('/img-1.png')",
        "bg-img-2": "url('/img-2.png')",
        "feature-bg": "url('/feature-bg.png')",
        pattern: "url('/pattern.png')",
        "pattern-2":
          "url('https://demo.cmssuperheroes.com/themeforest/kindori/wp-content/uploads/2020/08/bg-home-top-section.png')",
      },
      screens: {
        xs: "400px",
        "3xl": "1680px",
        "4xl": "2200px",
      },
      maxWidth: {
        "10xl": "1512px",
      },
      borderRadius: {
        "5xl": "40px",
      },
    },
  },
  plugins: [],
};
