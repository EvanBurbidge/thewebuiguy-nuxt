<template>
  <div class="intro-tile-wrapper">
    <div class="intro-tile-text">
      <h2 class="intro-tile-text-heading display-3 text-light">
        Welcome, I'm
      </h2>
    </div>
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
      padding: 15px;
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
      width: 100%;
      display: flex;
      height: 100vh;
      position: relative;
      flex-direction: row;
      align-items: center;
      background-size: cover;
      margin-top: -64px;
      background-position: right;
      background-repeat: no-repeat;
      background-image: url("../assets/homeBg.png");
      justify-content: center;
      border-bottom: 1px solid #0083aa;
      @media screen and (max-width: 768px) {
        display: none;
        background: #FFFFFF;
        flex-direction: column;
        width: calc(100% + 48px);
      }

    }
  }
</style>
