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
    // if true gives big int error on build if false gives error on email rendering only on build/preview dev mode works fine
    autoImport: false,
  },
  // this fixes build error but breaks the email rendering
  // also not recommended for production
  // nitro: {
  //   esbuild: {
  //     options: {
  //       target: "esnext",
  //     },
  //   },
  // },
});
