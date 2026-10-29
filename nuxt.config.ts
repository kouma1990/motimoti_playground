export default defineNuxtConfig({
  compatibilityDate: '2026-10-01',
  ssr: false,

  /*
  ** Headers of the page
  */
  app: {
    head: {
      title: 'MotiMoti Playground',
      meta: [
        { name: 'description', content: 'My splendiferous Nuxt.js project' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@element-plus/nuxt'
  ],

  runtimeConfig: {
    public: {
      slackApiToken: process.env.SLACK_API_TOKEN
    }
  }
})
