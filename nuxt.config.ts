// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: ["~/assets/css/main.css"],
  modules: ["@vue-email/nuxt"],
  vueEmail: {
    baseUrl: "https://vue-email-demo.vercel.app/",
    autoImport: true,
  },
  // this fixes build error but breaks the email rendering
  // also not recommended for production
});
