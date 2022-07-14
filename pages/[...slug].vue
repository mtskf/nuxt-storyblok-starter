<template lang="pug">
#main(v-editable="blok")
  StoryblokComponent(v-if="story" :blok="story.content")
</template>

<script setup>
defineProps({ blok: Object })
const { slug } = useRoute().params
const story = await useStoryblok(slug ? slug : 'home', {
  version: 'draft',
})
</script>

<style lang="scss" scoped>
</style>