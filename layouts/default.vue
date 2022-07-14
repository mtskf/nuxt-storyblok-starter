<template lang="pug">
Header
main
  slot
  //- NuxtPage
Footer

</template>

<script setup>
</script>

<style lang="scss" scoped>
main { @apply pt-20 pb-20; }
</style>

<style>
.page-enter-active,
.page-leave-active {
  transition: opacity 0.3s;
}

.page-enter,
.page-enter-active:not(.page-enter-to),
.page-leave-to {
  opacity: 0;
}
</style>