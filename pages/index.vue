<template>
  <div class="my-app-wrapper">
    <IntroTile id="home-section" />
    <div id="about-section" class="web-section">
      <about-me />
    </div>
    <div id="blog-section" class="web-section">
      <BlogList :blogs="blogs" />
    </div>
    <div id="contact-section" class="web-section">
      <contact />
    </div>
  </div>
</template>

<script>


export default {
  computed: {
    isMobile() {
      return this.$mq === 'xxs' || this.$mq === 'xs' || this.$mq === 'sm'
    }
  },
}
</script>

<style>
  a {
    color: #0083aa !important;
  }
  .web-section {
    padding: 25px 20px;
  }

  #about-section {
    background: #f5f8fa;
  }

  #blog-section,
  #services-section,
  #contact-section {
    background: #FFFFFF;
  }
</style>
