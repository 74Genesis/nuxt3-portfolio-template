import svgLoader from 'vite-svg-loader'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss"],
  ssr: false,
  runtimeConfig: {
    // public: {
    //   baseURL: '/nuxt3-portfolio-template/',
    // },
    // app: {
    //   baseURL: '/nuxt3-portfolio-template/',
    // },
  },
  app: {
    baseUrl: '/nuxt3-portfolio-template/',
    buildAssetsDir: '/assets/',
    head: {
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
});
