<template lang="pug">
footer#footer
  #footer__inner
    a#footer__brand(href="#")
      h1#footer__logo BRANDING
    nav#footer__nav
      ul
        li.heading Product
        li: a(href="#") Features
        li: a(href="#") Pricing
        li: a(href="#") FAQ
      ul
        li.heading Company
        li: a(href="#") Privacy
        li: a(href="#") Terms of Service
      ul
        li.heading Developers
        li: a(href="#") Developer API
        li: a(href="#") Documentation
      #footer__social
        h5 Follow Us
        #footer__social__nav
          a(href="#"): BookmarkIcon
          a(href="#"): BookmarkIcon
          a(href="#"): BookmarkIcon
</template>

<script setup>
import { BookmarkIcon } from '@heroicons/vue/outline'
</script>

<style lang="scss" scoped>
#footer {@apply bg-gray-900 text-white pt-12 pb-8 px-4;}

#footer__inner {  @apply max-w-7xl mx-auto px-10 container overflow-hidden flex flex-col lg:flex-row justify-between; }

#footer__brand { @apply block mr-4 w-1/3;}
#footer__logo { @apply w-40 ml-4 lg:ml-0; }

#footer__nav { @apply w-2/3 block sm:flex text-sm mt-6 lg:mt-0 gap-10; }

ul { @apply text-gray-700 list-none p-0 font-thin flex flex-col text-left w-full; }
li.heading { @apply inline-block py-2 px-3 text-white uppercase font-medium tracking-wide; }
li>a { @apply inline-block py-2 px-3 text-gray-200 hover:text-white no-underline; }

#footer__social { @apply text-gray-700 flex flex-col w-full; }
h5 { @apply inline-block py-2 px-3 text-white uppercase font-medium tracking-wide; }

#footer__social__nav { @apply flex py-2 px-3 gap-3; }
a { @apply block w-7 h-7 text-gray-400 hover:text-white no-underline; }
svg { @apply block; }
</style>