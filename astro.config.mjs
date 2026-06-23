// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({
  // GitHub Pages project site. Update `site` to your GitHub username and `base`
  // to your repo name if they differ.
  site: 'https://avetavos.github.io',
  base: '/docker-from-zero-to-hero',
  output: 'static',
  integrations: [starlight({
      title: 'Docker — From Zero to Hero',
      defaultLocale: 'en',
      locales: {
        en: { label: 'English', lang: 'en' },
        th: { label: 'ไทย', lang: 'th' },
      },
      customCss: ['./src/styles/custom.css'],
      social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/avetavos/docker-from-zero-to-hero' }],
      sidebar: [
        { label: 'Intro & Concepts', items: [{ autogenerate: { directory: 'intro' } }] },
        { label: 'Images & the Dockerfile', items: [{ autogenerate: { directory: 'images-dockerfile' } }] },
        { label: 'Running Containers', items: [{ autogenerate: { directory: 'containers' } }] },
        { label: 'Data & Volumes', items: [{ autogenerate: { directory: 'data-volumes' } }] },
        { label: 'Networking', items: [{ autogenerate: { directory: 'networking' } }] },
        { label: 'Docker Compose', items: [{ autogenerate: { directory: 'compose' } }] },
        { label: 'Optimization & Best Practices', items: [{ autogenerate: { directory: 'optimization' } }] },
        { label: 'Registry, CI & Deploy', items: [{ autogenerate: { directory: 'registry-ci-deploy' } }] },
      ],
      }), preact()],
});