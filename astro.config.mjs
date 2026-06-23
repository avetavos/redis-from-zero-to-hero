// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({
  // GitHub Pages project site. Update `site` to your GitHub username and `base`
  // to your repo name if they differ.
  site: 'https://avetavos.github.io',
  base: '/redis-from-zero-to-hero',
  output: 'static',
  integrations: [starlight({
      title: 'Redis — From Zero to Hero',
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