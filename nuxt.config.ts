import tailwindcss from "@tailwindcss/vite";

declare const process: {
  env: Record<string, string | undefined>;
};

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  ssr: true,
  modules: [
    "@nuxt/eslint",
    "@nuxt/ui",
    "@nuxt/image",
    "@nuxt/fonts",
    "nuxt-umami",
    "nuxt-resend",
  ],
  routeRules: {
    "/**": { prerender: true },
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ["/"],
    },
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
  umami: {
    id: process.env.UMAMI,
    host: "https://cloud.umami.is/script.js",
    autoTrack: true,
    ignoreLocalhost: true,
  },
  ui: {
    colorMode: false,
  },
});
