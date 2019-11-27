<template>
  <div>
    <IntroTile/>
    <AboutMe />
    <BlogList :blogs="blogs" />
  </div>
</template>

<script>
import Blogs from '../data/blog'
import AboutMe from '../components/About.vue'
import IntroTile from '../components/IntroTile.vue'
import BlogList from '../components/blog/BlogList.vue'

export default {
  components: {
    AboutMe,
    BlogList,
    IntroTile
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
