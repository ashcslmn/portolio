// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  runtimeConfig: {
    public: {
      site: {
        name:  process.env.NUXT_SITE_NAME || ''
      },
      outsoar: {
        api_base_url: process.env.NUXT_OUTSOAR_API_BASE_URL || '',
        assets_url:  process.env.NUXT_OUTSOAR_ASSETS_URL || ''
      },
    },
  },
  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
      meta: [
        { charset: "utf-8" },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
      ],
    },
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/content",
    "@nuxt/image-edge",
    '@nuxtjs/plausible',
    [
      "@nuxtjs/google-fonts",
      {
        download: true,
        families: {
          Poppins: {
            wght: [100, 400, 500, 600],
            ital: [100],
          },
        },
      },
    ],
  ],
});
