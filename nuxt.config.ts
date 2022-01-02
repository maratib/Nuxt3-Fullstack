import { defineNuxtConfig } from "nuxt3";

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  meta: {
    title: "Title of the site : example.com",
    meta: [
      // <meta name="viewport" content="width=device-width, initial-scale=1">
      { name: "viewport", content: "width=device-width, initial-scale=1" },
    ],
    script: [
      // <script src="https://myawesome-lib.js"></script>
      // { src: "https://awesome-lib.js" },
    ],
    link: [
      // <link rel="stylesheet" href="https://myawesome-lib.css">
      // { rel: "stylesheet", href: "https://awesome-lib.css" },
      { rel: "icon", type: "image/x-icon", href: "/favicon.png" },
    ],
    // please note that this is an area that is likely to change
    style: [
      // <style type="text/css">:root { color: red }</style>
      // { children: ":root { color: red }", type: "text/css" },
    ],
    bodyAttrs: {
      class: "debug-screens",
    },
  },
  buildModules: [],
  css: ["~/assets/css/main.css"],
  // components: ["~/components", "~/components/ui", "~/components/utils"],
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
});
