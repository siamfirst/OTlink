// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: ['@nuxtjs/tailwindcss', "nuxt-vuefire", "@pinia/nuxt"],

  ssr: false,
  compatibilityDate: '2024-07-30',

  vuefire: {
    config: {
      apiKey: "AIzaSyA-nRkLSjc2YD2uVoQSw_qTm9WSXnqQyIQ",
      authDomain: "ot-link-58d76.firebaseapp.com",
      projectId: "ot-link-58d76",
      storageBucket: "ot-link-58d76.appspot.com",
      messagingSenderId: "687468469404",
      appId: "1:687468469404:web:98dcfb0896e426c296e159",
      measurementId: "G-XXSFSX4EFT"
    },
    auth: {
      enabled: true,
      sessionCookie: false,
    }
  },

})