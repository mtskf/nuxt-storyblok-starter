# Nuxt3 Storyblok Minimal Starter
This is a Nuxt3 Starter Kit for Storyblok with Vite, Vue3, TypeScript, Pug, SCSS and TailwindCSS!

For more info:
- [Nuxt3 documentation](https://v3.nuxtjs.org)
- [Story Docs](https://www.storyblok.com/docs/guide/introduction)
- [Storyblok - Nuxt Hub](https://www.storyblok.com/tc/nuxtjs)
- [TailwindCSS](https://tailwindcss.com/)
- [Heroicons](https://heroicons.com/)

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install --shamefully-hoist
```

Create .env file and set storyblok's API token:

```bash
touch .env
open .env
```

```.env
STORYBLOK_TOKEN=....
```

Setup Navigation menu
https://www.storyblok.com/tp/create-dynamic-menus-in-storyblok-and-nuxt


## Development Server

Start the development server on http://localhost:3000
- Editor: http://localhost:3000/editor.html
- Tailwind Viewer: http://localhost:3000/_tailwind

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Checkout the [deployment documentation](https://v3.nuxtjs.org/guide/deploy/presets) for more information.
