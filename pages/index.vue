<template>
  <div>
    <IntroTile />
    <div class="web-section" id="about-section">
      <AboutMe />
    </div>
    <div class="web-section" id="blog-section" background="white">
      <BlogList :blogs="blogs" />
    </div>
    <div class="web-section" id="testimonials-section" background="white">
      <Testimonials />
    </div>
    <div class="web-section" id="services-section" background="white">
      <Services />
    </div>
    <div class="web-section" id="contact-section" background="white">
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
    return Promise.all(blogs.map(blog => asyncImport(blog.title)))
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
</style>
