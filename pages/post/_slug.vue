<template>
  <v-row justify="row" align-content="center" style="margin-top: 70px">
    <v-col
      :xs="12"
      :md="3"
    >
      <v-card
        style="padding: 20px"
        :flat="$mq ==='xxs' || $mq === 'xs'"
      >
        <blog-meta :blog="blog" />
      </v-card>
    </v-col>
    <v-col
      :xs="12"
      :md="9"
    >
      <v-card
        style="padding: 20px"
        :flat="$mq ==='xxs' || $mq === 'xs'"
      >
        <template v-if="!($mq ==='xxs' || $mq === 'xs')">
          <h1 class="display-1">
            {{ blog.attributes.title }}
          </h1>
          <hr>
          <br>
        </template>
        <blog-markdown
          :render-func="blog.vue.render"
          :static-render-funcs="blog.vue.staticRenderFns"
        />
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import BlogMarkdown from '../../components/blog/BlogMarkdown'
const BlogMeta = () => import('../../components/blog/BlogMeta.vue')

export default {
  layout: 'bloglayout',
  components: {
    BlogMarkdown,
    BlogMeta
  },
  async asyncData({ params }) {
    const blog = await import(`../../data/blog/${params.slug}/readme.md`)
    const blogImage = `../../images/blog/${params.slug.toLowerCase()}/_thumb.png`
    return {
      blog: {
        ...blog,
        image: blogImage
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.v-application code {
  background: transparent !important;
}
.blog-wrap {
  margin-top: 70px !important;
  @media screen and (max-width: 769px) {
    padding: 0;
  }
}
</style>
