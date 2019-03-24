<template>
  <div>
    <AboutMe />
    <BlogList :blogs="blogs" />
    <div>
      <img src="../static/logo.png" alt="the web ui guy main logo">
      <h1 class="title">
        TheWebUiGuy
      </h1>
      <h2 class="subtitle">
        <!--Please bear with us while we're doing some remodeling.-->
      </h2>
    </div>
  </div>
</template>

<script>
import Blogs from '../data/blog'
import AboutMe from '../components/About.vue'
import BlogList from '../components/BlogList.vue'

export default {
  components: {
    AboutMe,
    BlogList
  },
  asyncData() {
    const blogs = Blogs

    async function asyncImport(blogName) {
      const wholeMD = await import(`../data/blog/${blogName}.md`)
      console.warn(wholeMD.attributes)
      return wholeMD.attributes
    }
    return Promise.all(blogs.map(blog => asyncImport(blog.title)))
      .then(res => ({
        blogs: res
      }))
  }
}
</script>
