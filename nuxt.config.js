import files from './data/blog'

const path = require('path')
const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/vuetify',
    // Or if you have custom options...
    ['vue-scrollto/nuxt', { duration: 300 }]
  ],
  axios: {
    proxy: true // Can be also an object with default options
  },
  vuetify: {
    materialIcons: true,
    css: true,
    treeShake: true,
    theme: {
      primary: '#0083aa',
      secondary: '#094A5D',
      error: '#B71243',
      accent: '#56964b'
    }
  },
  proxy: {
    '/v2/': 'http://thewebuiguy.com/wp-json/wp/'
  },
  generate: {
    routes: []
      .concat(files.map(w => `/post/${w.title}`))
  },
  /*
  ** Build configuration
  */
  build: {
    transpile: [/^vuetify/],
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      config.module.rules.push({
        test: /\.md$/,
        loader: 'frontmatter-markdown-loader',
        include: path.resolve(__dirname, 'data'),
        options: {
          vue: true
        }
      })
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
