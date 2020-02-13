<template>
  <transition v-show="zIndex > 0">
    <v-toolbar
      :style="{'z-index': zIndex}"
      class="navigation-bar"
      color="white"
    >
      <v-toolbar-title>
        <nuxt-link to="/">
          <img
            src="../static/logo.png"
            alt="the main webuiguy logo"
            class="main-logo"
          >
        </nuxt-link>
      </v-toolbar-title>
      <v-spacer />
      <v-toolbar-items>
        <v-btn v-scroll-to="'#home-section'" text>
          Home
        </v-btn>
        <v-btn
          v-scroll-to="'#about-section'"
          text
        >
          About
        </v-btn>
        <v-btn
          v-scroll-to="'#blog-section'"
          text
        >
          Blog
        </v-btn>
        <v-btn
          v-scroll-to="'#contact-section'"
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
    zIndex: 0,
    isBlogPage: false
  }),
  created() {
    if (process.browser) {
      this.scrollPos = window.scrollY
      this.height = window.innerHeight
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
          this.zIndex = 2
        } else {
          this.zIndex = 0
        }
      }
    }
  }
}
</script>

<style scoped lang="scss">
  .navigation-bar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    transition: top 1s linear;
    border-bottom: 1px solid #0083aa;
    z-index: 2;
  }

  img.main-logo {
    width: 50%;
  }
</style>
