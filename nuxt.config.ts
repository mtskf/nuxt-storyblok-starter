import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  buildModules: ["@storyblok/nuxt"],
  modules: ['@nuxtjs/tailwindcss'],
  typescript: {},
  ssr: true,
  storyblok: {
    accessToken: process.env.STORYBLOK_TOKEN
  },
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
    link: [],
  }
})
