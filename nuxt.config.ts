import svgLoader from 'vite-svg-loader'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss"],
  ssr: false,
  app: {
    head: {
      // script: [{ src: "/scripts/webtorrent.min.js" }],
      noscript: [{ children: "JavaScript is required" }],
    },
  },
  css: ['@/assets/css/fonts.css', '@/assets/css/common.scss'],
  vite: {
    plugins: [
      svgLoader()
    ]
  },
  router: {
    scrollBehavior: () => ({ x: 0, y: 0 }),
  },
  // plugins: [
  //   { src: "https://esm.sh/webtorrent", mode: "client" }, // only on client side
  // ],
});
