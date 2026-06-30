// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({
  // GitHub Pages project site. Update `site` to your GitHub username and `base`
  // to your repo name if they differ.
  site: 'https://devops-tools.avetavos.com',
  base: '/redis',
  output: 'static',
  integrations: [starlight({
      title: 'Redis — From Zero to Hero',
      head: [
        { tag: 'script', attrs: { type: 'module', src: '/redis/enhance.js' } },
        { tag: 'link', attrs: { rel: 'manifest', href: '/redis/manifest.webmanifest' } },
        { tag: 'link', attrs: { rel: 'apple-touch-icon', href: '/redis/apple-touch-icon.png' } },
        { tag: 'link', attrs: { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/redis/icon-192.png' } },
        { tag: 'meta', attrs: { name: 'theme-color', content: '#DC382D' } },
        { tag: 'meta', attrs: { name: 'mobile-web-app-capable', content: 'yes' } },
        { tag: 'meta', attrs: { name: 'apple-mobile-web-app-capable', content: 'yes' } },
        { tag: 'meta', attrs: { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' } },
        { tag: 'meta', attrs: { name: 'apple-mobile-web-app-title', content: "Redis" } },
        { tag: 'script', content: "if('serviceWorker' in navigator){window.addEventListener('load',function(){navigator.serviceWorker.register('/redis/sw.js',{scope:'/redis/'}).catch(function(){})})}" },
      ],
      defaultLocale: 'en',
      locales: {
        en: { label: 'English', lang: 'en' },
        th: { label: 'ไทย', lang: 'th' },
      },
      customCss: ['./src/styles/custom.css'],
      social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/avetavos/redis-from-zero-to-hero' }],
      sidebar: [
        { label: 'Intro & Setup', items: [{ autogenerate: { directory: 'intro-setup' } }] },
        { label: 'Keys & Strings', items: [{ autogenerate: { directory: 'keys-strings' } }] },
        { label: 'Lists & Hashes', items: [{ autogenerate: { directory: 'lists-hashes' } }] },
        { label: 'Sets & Sorted Sets', items: [{ autogenerate: { directory: 'sets-sorted-sets' } }] },
        { label: 'Pub/Sub & Streams', items: [{ autogenerate: { directory: 'pubsub-streams' } }] },
        { label: 'Persistence & Expiration', items: [{ autogenerate: { directory: 'persistence-expiration' } }] },
        { label: 'Patterns & Use Cases', items: [{ autogenerate: { directory: 'patterns' } }] },
        { label: 'Transactions, Lua & Tooling', items: [{ autogenerate: { directory: 'transactions-scripting-tooling' } }] },
      ],
      }), preact()],
});