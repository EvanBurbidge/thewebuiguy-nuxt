<template>
  <transition>
    <v-toolbar
      :style="{...stylesForFixed, 'z-index': 2}"
      :color="backgroundColor"
      :flat="isTransparent"
    >
      <v-toolbar-title>
        <nuxt-link to="/">
          <img
            :src="logo"
            alt="the main webuiguy logo"
            class="main-logo"
          >
        </nuxt-link>
      </v-toolbar-title>
      <v-spacer />
      <v-toolbar-items class="hidden-xs-and-down">
        <v-btn
          v-scroll-to="'#about-section'"
          :dark="isTransparent"
          text
        >
          About
        </v-btn>
        <v-btn
          v-scroll-to="'#blog-section'"
          :dark="isTransparent"
          text
        >
          Blog
        </v-btn>
        <v-btn
          v-scroll-to="'#testimonials-section'"
          :dark="isTransparent"
          text
        >
          Testimonials
        </v-btn>
        <v-btn
          v-scroll-to="'#services-section'"
          :dark="isTransparent"
          text
        >
          Services
        </v-btn>
        <v-btn
          v-scroll-to="'#contact-section'"
          :dark="isTransparent"
          text
        >
          Contact Me
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </transition>
</template>

<script>
import logo from '../static/logo.png'

export default {
  data: () => ({
    logo,
    height: 0,
    scrollPos: 0,
    isTransparent: true
  }),
  computed: {
    stylesForFixed() {
      if (!this.isTransparent) {
        return {
          position: 'fixed',
          top: 0,
          left: 0,
          width: `100%`,
          transition: 'top 1s linear',
          'border-bottom': `1px solid #0083aa`
        }
      }
      return {
        top: 0,
        left: 0,
        width: `100%`,
        transition: 'top 1s linear',
        'border-bottom': `1px solid #0083aa`
      }
    },
    backgroundColor() {
      if (this.isTransparent) {
        return 'transparent'
      }
      return 'white'
    }
  },
  created() {
    if (process.browser) {
      this.scrollPos = window.scrollY
      this.height = window.innerHeight - 65
      window.addEventListener('scroll', e => this.getScrollPos(e), false)
    }
  },
  destroyed() {
    if (process.browser) {
      window.removeEventListener('scroll', this.getScrollPos)
    }
  },
  methods: {
    getScrollPos() {
      if (process.browser) {
        this.scrollPos = window.scrollY
        if (this.scrollPos > this.height) {
          this.isTransparent = false
        } else {
          this.isTransparent = true
        }
      }
    }
  }
}
</script>

<style scoped>
  img.main-logo {
    width: 50%;
  }
</style>
