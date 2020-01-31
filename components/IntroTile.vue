<template>
  <div class="intro-tile-wrapper">
    <div
      v-if="!isMobile"
      class="intro-tile-image"
    >
      <v-img
        :src="logo"
        :lazy-src="logo"
        alt="main-logo"
        aspect-ratio="1"
        class="logo"
      />
    </div>
    <div class="intro-tile-text">
      <h2 class="intro-tile-text-heading display-3 text-light">
        Hello There I'm TheWebUiGuy
      </h2>
      <h2 class="intro-tile-text-heading display-3 text-light text-xs-white">
        Welcome to my site
      </h2>
    </div>
  </div>
</template>

<script>
import logo from '../static/thewebuiguy-logo.jpg'
import DownArrow from './DownArrow.vue'

export default {
  components: {
    // eslint-disable-next-line vue/no-unused-components
    DownArrow
  },
  data: () => ({
    logo
  }),
  computed: {
    isMobile() {
      return this.$mq === 'xxs' || this.$mq === 'xs' || this.$mq === 'sm'
    }
  }
}
</script>

<style lang="scss" scoped>
  @import url('https://fonts.googleapis.com/css?family=Karla&display=swap');

  .intro-tile {
    &-image {
      width: 15%;
      z-index: 1;
      padding: 20px;
      overflow: hidden;
      border-radius: 50%;
      @media screen and (max-width: 768px) {
        width: 50%;
      }

      .logo {
        width: 100%;
        border: 2px solid #0083aa;
      }
    }

    &-text {
      z-index: 1;
    }

    &-wrapper {
      position: relative;
      display: flex;
      height: 100vh;
      padding-top: 24px;
      flex-direction: row;
      align-items: center;
      width: 100%;
      background: #FFFFFF;
      justify-content: space-evenly;
      @media screen and (max-width: 768px) {
        width: calc(100% + 48px);
      }

      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        width: 0;
        height: 0;
        z-index: 0;
        border-bottom: 700px solid #0083aa;
        border-left: 600px solid transparent;
        border-top: 700px solid darken(#0083aa, 5);
      }

      &::before {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        width: 0;
        height: 0;
        z-index: 0;
        border-bottom: 700px solid darken(#0083aa, 10);;
        border-left: 700px solid transparent;
      }
    }
  }
</style>
