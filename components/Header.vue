<template lang="pug">
header#navbar
  nav#navbar__inner
    h1 BRANDING
    ul
      li(v-for="blok in headerMenu" :key="blok._uid")
        NuxtLink(:to="blok.link.story.url" class="hover:text-[#50b0ae]") {{ blok.link.story.name }}
</template>

<script setup>
const storyblokApi = useStoryblokApi()
const { data } = await storyblokApi.get('cdn/stories/config', {
  version: 'draft',
  resolve_links: 'url',
})

const headerMenu = ref(null)
headerMenu.value = data.story.content.header_menu
</script>

<style lang="scss" scoped>
#navbar {
  @apply fixed top-0 inset-x-0 bg-white;
  &__inner { @apply flex justify-between items-center h-20 max-w-7xl mx-auto px-10; }
  ul { @apply flex justify-between items-center gap-7; }
  a.router-link-active {
    @apply underline underline-offset-4 decoration-4 decoration-[#50b0ae];
  }
}
</style>