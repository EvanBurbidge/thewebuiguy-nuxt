<template>
  <div class="intro-tile-wrapper">
    <div class="intro-tile-text text-center">
      <h2 class="intro-tile-text-heading display-3 text-light">
        Welcome, I'm
      </h2>
      <h2 class="intro-tile-text-heading display-2">
        <span class="primary-text">The</span><span class="secondary-text">Web</span><span class="primary-text">UI</span><span class="secondary-text">Guy</span>
      </h2>
      <down-arrow />
    </div>
  </div>
</template>

<script>
import DownArrow from './DownArrow.vue'

export default {
  components: {
    // eslint-disable-next-line vue/no-unused-components
    DownArrow
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
      font-weight: bold;
      text-transform: uppercase;
      .primary-text {
        color: #0083aa;
      }
      .secondary-text {
        color: #005d7f;
      }
    }

    &-wrapper {
      width: 100%;
      display: flex;
      height: calc(100vh + 64px);
      position: relative;
      flex-direction: row;
      align-items: center;
      background-size: cover;
      margin-top: -64px;
      background-position: 0 50px;
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
