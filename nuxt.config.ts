import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: [
    "@nuxt/eslint",
    "@nuxt/ui",
    "@nuxt/image",
    "@nuxt/fonts",
  ],
  routeRules: {
    "/": { prerender: true },
  },
  css: ["./app/assets/css/main.css"],
  vite: {
    plugins: [tailwindcss()],
  },
  icon: {
    customCollections: [
      {
        prefix: "tech-logos",
        dir: "./app/assets/icons/tech-logos",
      },
      {
        prefix: "companies",
        dir: "./app/assets/icons/companies",
      },
    ],
  },
});