<template>
  <v-row justify="row" align-content="center" style="margin-top: 70px">
    <v-col
      :xs="12"
      :md="3"
    >
      <v-card style="padding: 20px">
        <blog-meta :blog="blog" />
      </v-card>
    </v-col>
    <v-col
      :xs="12"
      :md="9"
    >
      <v-card style="padding: 20px">
        <h1 class="display-1">
          {{ blog.attributes.title }}
        </h1>
        <hr>
        <br>
        <div v-html="blog.html" />
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import marked from 'marked'
import hljs from 'highlight.js'
import 'highlight.js/styles/github.css'

const BlogMeta = () => import('../../components/blog/BlogMeta.vue')

export default {
  layout: 'bloglayout',
  components: {
    BlogMeta
  },
  async asyncData({ params }) {
    const blog = await import(`../../data/blog/${params.slug}/readme.md`)
    const blogImage = `../../images/blog/${params.slug.toLowerCase()}/_thumb.png`
    const processed = marked(blog.html, {
      highlight(md) {
        return hljs.highlightAuto(md).value
      }
    })
    return {
      blog: {
        ...blog,
        html: processed,
        image: blogImage
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.blog-wrap {
  margin-top: 70px !important;
  @media screen and (max-width: 769px) {
    padding: 0;
  }
}
</style>
