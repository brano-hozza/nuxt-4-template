import VueI18nPlugin from "@intlify/unplugin-vue-i18n";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "hozza.dev",
      htmlAttrs: {
        lang: "en",
      },
    },
  },
  future: {
    compatibilityVersion: 4,
  },
  css: ["~/assets/css/tailwind.css", "~/assets/css/main.css"],
  vite: {
    plugins: [
      VueI18nPlugin.vite({
        include: ["./locales/**"],
      }),
    ],
  },
  modules: [
    "@pinia/nuxt",
    "@nuxtjs/tailwindcss",
    "@nuxt/icon",
    "@nuxtjs/i18n",
    "@nuxt/eslint",
    "@nuxt/image",
    "@nuxtjs/color-mode",
    "@nuxtjs/google-fonts",
    "@nuxtjs/robots",
    "@nuxt/content",
  ],
  devtools: { enabled: true },
  googleFonts: {
    families: {
      Inter: "100..700",
    },
  },
});
