// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/apollo',
    '@pinia/nuxt'
  ],
  imports: [
    'defineStore',
    ['defineStore', 'definePiniaStore'],
  ],
  apollo: {
    clients: {
      default: {
        httpEndpoint: 'http://localhost:17000/v1/graphql',
        inMemoryCacheOptions: {}
      }
    },
  },
  app: {
    head: {
      title: 'Ambers',
      meta: [
        { name: 'description', content: 'Ambers' }
      ],
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Raleway' }
      ]
    }
  },
})
