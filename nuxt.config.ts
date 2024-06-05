// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  debug: true,
  devtools: { enabled: false },
  modules: ["@nuxtjs/ionic", "@pinia/nuxt", "@nuxtjs/supabase", "@nuxtjs/tailwindcss"],
  css: [
    '@ionic/core/css/padding.css',
    '@ionic/core/css/float-elements.css',
    '@ionic/core/css/text-alignment.css',
    '@ionic/core/css/text-transformation.css',
    '@ionic/core/css/flex-utils.css',
    '@ionic/core/css/display.css'
  ],
  supabase: {
    redirect: false,
    redirectOptions: {
      login: '/login',
      callback: '/confirm'
    }
  },
})