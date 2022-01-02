module.exports = {
  content: [
    "./components/**/*.{vue,js,ts}",
    "./my/**/*.{vue,js,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./lib/**/*.{vue,js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    debugScreens: {
      position: ["bottom", "right"],
    },
    extend: {
      fontFamily: { headline: ["Oswald"] },
      colors: {
        myRed: "#FF0000",
        myBlue: "#0000FF",
        myLime: "#00FF00",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/aspect-ratio"),
    require("tailwindcss-debug-screens"),
  ],
};
