<template>
  <section class="container">
    <div>
      <img src="../static/logo.png" alt="the web ui guy main logo">
      <h1 class="title">
        TheWebUiGuy
      </h1>
      <h2 class="subtitle">
        Please bear with us while we're doing some remodeling.
      </h2>
    </div>
  </section>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  created() {
    this.getPortfolioItems()
  },
  methods: {
    ...mapActions({
      getPortfolioItems: 'portfolio/getPortfolioItems'
    })
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
