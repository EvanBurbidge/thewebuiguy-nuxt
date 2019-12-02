<template>
  <div>
    <IntroTile />
    <div id="about-section" class="web-section">
      <AboutMe />
    </div>
    <div id="blog-section" class="web-section" background="white">
      <BlogList :blogs="blogs" />
    </div>
    <div id="testimonials-section" class="web-section" background="white">
      <Testimonials />
    </div>
    <div id="services-section" class="web-section" background="white">
      <Services />
    </div>
    <div id="contact-section" class="web-section" background="white">
      <Contact />
    </div>
  </div>
</template>

<script>
import Blogs from '../data/blog'
import AboutMe from '../components/About.vue'
import Services from '../components/Services.vue'
import Contact from '../components/Contact.vue'
import IntroTile from '../components/IntroTile.vue'
import Testimonials from '../components/Testimonials.vue'
import BlogList from '../components/blog/BlogList.vue'

export default {
  components: {
    AboutMe,
    BlogList,
    IntroTile,
    Testimonials,
    Services,
    Contact
  },
  asyncData() {
    const blogs = Blogs

    async function asyncImport(blogName) {
      const wholeMD = await import(`../data/blog/${blogName}/readme.md`)
      return wholeMD.attributes
    }

    return Promise.all(blogs.map(b => asyncImport(b.title)))
      .then(res => ({
        blogs: res
      }))
  }
}
</script>

<style scoped>
  .web-section {
    padding: 25px 0;
  }

  #testimonials-section {
    background: #0083aa;
  }
</style>
