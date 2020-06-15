<template>
  <div class="my-app-wrapper">
    <Header />
    <ul>
      <li v-for="blog in allBlogs" :key="blog.blogSlug">
        {{ blog.blogTitle }}
      </li>
    </ul>
    <!-- <IntroTile id="home-section" />
    <div id="about-section" class="web-section">
      <about-me />
    </div>
    <div id="blog-section" class="web-section">
      <BlogList :blogs="blogs" />
    </div>
    <div id="contact-section" class="web-section">
      <contact />
    </div> -->
  </div>
</template>

<script>
import gql from 'graphql-tag'
import Header from '../components/header/Header.vue'

export default {
  components: {
    Header
  },
  apollo: {
    allBlogs: gql`
      {
        allBlogs {
          blogTitle
        }
      }
    `
  },
  computed: {
    isMobile() {
      return this.$mq === 'xxs' || this.$mq === 'xs' || this.$mq === 'sm'
    }
  }
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
