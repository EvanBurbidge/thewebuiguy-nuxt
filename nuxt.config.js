import MarkdownIt from 'markdown-it'
import Mode from 'frontmatter-markdown-loader/mode'
import mip from 'markdown-it-prism'

import files from './data/blog'

const md = new MarkdownIt({
  html: true,
  typographer: true
})
md.use(mip)

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
      { rel: 'icon', type: 'image/x-icon', href: './favicon.ico' },
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: 'favicon.ico'
      }
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

    '@/assets/prism-light.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/vuetify',
    ['nuxt-mq', {
      defaultBreakpoint: 'default',
      breakpoints: {
        xs: 450,
        sm: 769,
        md: 1250,
        lg: Infinity
      }
    }],
    // Or if you have custom options...
    ['vue-scrollto/nuxt', { duration: 300 }],
    ['nuxt-fontawesome', {
      component: 'fa',
      imports: [
        {
          set: '@fortawesome/fontawesome-free-brands',
          icons: ['faFacebook', 'faTwitter', 'faLinkedin']
        },
        {
          set: '@fortawesome/fontawesome-free-solid',
          icons: ['faCalendar', 'faUser']
        }
      ]
    }]
  ],
  vuetify: {
    materialIcons: true,
    css: false,
    treeShake: true,
    theme: {
      primary: '#0083aa',
      secondary: '#094A5D',
      error: '#B71243',
      accent: '#56964b'
    }
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
          mode: [Mode.VUE_RENDER_FUNCTIONS, Mode.VUE_COMPONENT],
          vue: {
            root: 'dynamicMarkdown'
          },
          markdown(body) {
            return md.render(body)
          }
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
