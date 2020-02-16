<template>
  <div class="my-app-wrapper">
  <!--    <IntroTile id="home-section" />-->
    <div id="blog-section" class="web-section">
      <BlogList :blogs="blogs" />
    </div>
    <div id="about-section" class="web-section">
      <AboutMe />
    </div>
    <div id="contact-section" class="web-section">
      <contact />
    </div>
  </div>
</template>

<script>
import Blogs from '../data/blog'
import AboutMe from '../components/About.vue'
import Services from '../components/Services.vue'
import Contact from '../components/Contact.vue'
// import IntroTile from '../components/IntroTile.vue'
import Testimonials from '../components/Testimonials.vue'
import BlogList from '../components/blog/BlogList.vue'

export default {
  components: {
    AboutMe,
    BlogList,
    // IntroTile,
    // eslint-disable-next-line vue/no-unused-components
    Testimonials,
    // eslint-disable-next-line vue/no-unused-components
    Services,
    // eslint-disable-next-line vue/no-unused-components
    Contact
  },
  computed: {
    isMobile() {
      return this.$mq === 'xxs' || this.$mq === 'xs' || this.$mq === 'sm'
    }
  },
  asyncData() {
    const blogs = Blogs

    async function asyncImport(blogName) {
      const wholeMD = await import(`../data/blog/${blogName}/readme.md`)
      return wholeMD.attributes
    }

    return Promise.all(blogs.map(b => asyncImport(b.title)))
      .then(res => ({
        blogs: res.filter(r => r.published)
      }))
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
    background: #f8f8f8;
  }

  #blog-section,
  #services-section,
  #contact-section {
    background: #FFFFFF;
  }
</style>
