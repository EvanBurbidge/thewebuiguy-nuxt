<template>
  <nav class="flex justify-between">
    <div class="flex items-start flex-shrink-0 text-white mr-6">
      <img src="https://www.datocms-assets.com/28175/1592212061-logo-sized.jpg" alt="main logo" class="navigation-logo">
    </div>
    <div class="w-full block flex-grow lg:flex content-end lg:w-auto pr-5">
      <button href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 mr-4 wuig-link">
        About Me
      </button>
      <button href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 mr-4 wuig-link">
        Blog
      </button>
      <button href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 wuig-link">
        Contact
      </button>
    </div>
  </nav>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.navigation-logo {
  max-width: 75px;
}
.wuig-link {
  color: #38495C
}
</style>
