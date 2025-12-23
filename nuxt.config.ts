import tailwindcss from "@tailwindcss/vite";

declare const process: {
  env: Record<string, string | undefined>;
};

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  ssr: true,
  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
    },
  },
  modules: [
    "@nuxt/eslint",
    "@nuxt/ui",
    "@nuxt/image",
    "@nuxt/fonts",
    "nuxt-umami",
    "nuxt-resend",
    "nuxt-gtag",
  ],
  gtag: {
    id: process.env.NUXT_GTAG_ID,
    enabled: process.env.NODE_ENV === "production",
  },
  routeRules: {
    "/**": { prerender: true },
    // Exclude runtime routes from prerendering
    "/_vercel/image/**": { prerender: false },
    "/_payload.json": { prerender: false },
    "/_payload.json/**": { prerender: false },
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ["/"],
      // Ignore these routes during crawling (using regex patterns)
      ignore: [/^\/_vercel\/image/, /^\/_payload\.json/],
      // Don't fail on errors for runtime routes
      failOnError: false,
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
  image: {
    format: ["webp", "avif"],
  },
});
