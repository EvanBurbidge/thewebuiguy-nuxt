<script lang="js">
export default {
  props: ['renderFunc', 'staticRenderFuncs'],
  created() {
    this.templateRender = this.renderFunc
    this.$options.staticRenderFns = this.staticRenderFuncs
  },
  render(createElement) {
    return this.templateRender ? this.templateRender() : createElement('div', 'Rendering')
  }
}
</script>
