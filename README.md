# Redis — From Zero to Hero

A bilingual (EN/TH), standalone, beginner→advanced course on **Redis** — from first principles (keys, strings, data types) to real-world patterns (caching, rate limiting, locks) and operations (persistence, transactions, Lua, tooling). It **gifts a Docker script to run Redis** so you have a live instance before the first lesson, then teaches hands-on with `redis-cli`.

## Tech Stack

| Layer | Technology |
| ----- | ---------- |
| Site framework | [Astro 6](https://astro.build) + [Starlight 0.40](https://starlight.astro.build) |
| UI islands | [Preact](https://preactjs.com) (via `@astrojs/preact`) |
| Hands-on | **`<RunRedis>`** gifts a Docker run script (copy) to start Redis locally; **`<TryRedis>`** copies a lesson's `redis-cli` commands to paste into your CLI. There is **no in-browser runner** — Redis is a server. |
| Unit tests | [Vitest](https://vitest.dev) + `@testing-library/preact` |
| Styling | Starlight default + custom CSS (`src/styles/custom.css`) |
| i18n | Starlight built-in, `defaultLocale: 'en'`, locales: `en` + `th` |

## Commands

```bash
npm install        # Install dependencies
npm run dev        # Start dev server at http://localhost:4321
npm run build      # Build production site to ./dist/
npm run preview    # Preview the production build locally
npm test           # Run Vitest unit tests
```

> No code-runner build step. Run Redis via the gifted Docker script and paste lesson commands into `redis-cli`.

## Content Structure

```
src/content/docs/
  en/                                  # English — served at /en/...
    intro-setup/
    keys-strings/
    lists-hashes/
    sets-sorted-sets/
    pubsub-streams/
    persistence-expiration/
    patterns/
    transactions-scripting-tooling/
    index.mdx                          # EN landing (splash, with the gift block)
  th/                                  # Thai — served at /th/...
    (same module directories)
    index.mdx
```

### The 8 Modules

| Directory | Module |
| --------- | ------ |
| `intro-setup` | Intro & Setup (the gifted Docker script) |
| `keys-strings` | Keys & Strings |
| `lists-hashes` | Lists & Hashes |
| `sets-sorted-sets` | Sets & Sorted Sets |
| `pubsub-streams` | Pub/Sub & Streams |
| `persistence-expiration` | Persistence & Expiration |
| `patterns` | Patterns & Use Cases |
| `transactions-scripting-tooling` | Transactions, Lua & Tooling |

### Lesson Template

frontmatter (`title`, `description`, `sidebar.order`) → imports → concept intro → prose with fenced `text` (showing the `127.0.0.1:6379>` prompt + reply) → hoisted `export const ...Code` (bare commands) + `<TryRedis code={...} />` → `<Callout>` (key point / gotcha) → `<Quiz>` → `<ProgressTracker>` (last). The intro module and landing also use `<RunRedis />`. IDs follow `<module>/<slug>`.

> **⚠️ Authoring notes:**
> - **`<RunRedis />`** = the gifted Docker setup box (start Redis). **`<TryRedis code={…} />`** shows bare `redis-cli` commands (no prompt) + a "Copy commands" button to paste into your CLI. (try.redis.io's interactive sandbox is discontinued — do not link it.)
> - **In `export const` snippets, escape `${`→`\${`** where present; double-escape `\\n`. Fenced blocks are literal.
> - **Never put a bare `{...}` or `${...}` in prose or headings** — keep braces/`${VAR}` in backtick code spans or fenced blocks. Lua `KEYS[1]`/`ARGV[1]` (square brackets) are fine.
> - **Internal links must include the base path**, e.g. `/redis-from-zero-to-hero/en/keys-strings/`.
> - Use **modern Redis 7** commands; `redis:7-alpine` for the container.

## Deployment

Fully static (`output: 'static'`) → `dist/`. Deploys to GitHub Pages via `.github/workflows/deploy.yml` (build with `withastro/action` on Node 22, publish with `actions/deploy-pages`).

One-time setup: create the repo, push `main`, set **Settings → Pages → Source: GitHub Actions**. Base path in `astro.config.mjs`: `site: 'https://avetavos.github.io'`, `base: '/redis-from-zero-to-hero'`. If you change `base`, update the base-prefixed links in `src/content/docs/{en,th}/index.mdx`.
