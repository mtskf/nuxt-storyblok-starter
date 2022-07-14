<template lang="pug">
article(v-html="richtext" :class="{ 'two-col': blok.two_column }")
</template>

<script setup>
const props = defineProps({ blok: Object });
const storyblokApi = useStoryblokApi();
const richtext = computed(() => storyblokApi.richTextResolver.render(props.blok.wysiwyg));
</script>


<style lang="scss" scoped>
article {
  @apply mx-auto prose lg:prose-xl prose-slate prose-img:rounded prose-a:text-blue-600;
  &.two-col { @apply md:columns-2 md:gap-10 lg:gap-12; }
}
</style>