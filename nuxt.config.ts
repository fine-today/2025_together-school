import { config } from "dotenv";
import { resolve } from "path";

const envFile = `.env.${process.env.NODE_ENV || "development"}`;
config({ path: resolve(process.cwd(), envFile) });
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE,
    },
  },
  modules: [
    "@nuxt/eslint",
    "@nuxt/fonts",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxt/ui",
  ],
  ui: { prefix: "Nuxt" },
});
