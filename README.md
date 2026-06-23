# Docker — From Zero to Hero

A bilingual (EN/TH), standalone, beginner→advanced course on **Docker** — from first principles (images, containers) to production practices (Compose, optimization, CI/CD). It teaches through real Dockerfiles, CLI commands, and Compose files with expected output, plus a one-click "Try in Play with Docker" for hands-on practice.

## Tech Stack

| Layer | Technology |
| ----- | ---------- |
| Site framework | [Astro 6](https://astro.build) + [Starlight 0.40](https://starlight.astro.build) |
| UI islands | [Preact](https://preactjs.com) (via `@astrojs/preact`) |
| Hands-on | **`<PlayWithDocker>`** — copies the snippet and opens [Play with Docker](https://labs.play-with-docker.com/) (free, real Docker in the browser). There is **no in-browser code runner** — Docker needs a daemon. |
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

> No code-runner build step. Lessons show commands + expected output; "Try in Play with Docker" opens an external hands-on environment.

## Content Structure

```
src/content/docs/
  en/                          # English — served at /en/...
    intro/
    images-dockerfile/
    containers/
    data-volumes/
    networking/
    compose/
    optimization/
    registry-ci-deploy/
    index.mdx                  # EN landing (splash)
  th/                          # Thai — served at /th/...
    (same module directories)
    index.mdx                  # TH landing (splash)
```

### The 8 Modules

| Directory | Module |
| --------- | ------ |
| `intro` | Intro & Concepts |
| `images-dockerfile` | Images & the Dockerfile |
| `containers` | Running Containers |
| `data-volumes` | Data & Volumes |
| `networking` | Networking |
| `compose` | Docker Compose |
| `optimization` | Optimization & Best Practices |
| `registry-ci-deploy` | Registry, CI & Deploy |

### Lesson Template

frontmatter (`title`, `description`, `sidebar.order`) → imports → concept intro → prose with fenced `dockerfile`/`bash`/`yaml` + expected `text` output → hoisted `export const ...Code` + `<PlayWithDocker code={...} />` (hands-on lessons) → `<Callout>` (key point / gotcha) → `<Quiz>` → `<ProgressTracker>` (last). IDs follow `<module>/<slug>`.

> **⚠️ Authoring notes:**
> - **In `export const` snippets, escape `${`→`\${`** — Dockerfile `ARG`/`ENV`, shell, and Compose use `${VAR}`. Fenced code blocks are literal (no escaping). Double-escape `\\n` if needed.
> - **Never put a bare `{...}` or `${...}` in prose or headings** — keep `${VAR}`, JSON, and Compose/Actions snippets in backtick code spans or fenced blocks. (GitHub Actions `${{ secrets.X }}` lives only inside fenced `yaml`.)
> - **Internal links must include the base path**, e.g. `/docker-from-zero-to-hero/en/images-dockerfile/`.
> - Use **modern Docker**: Compose v2 (`docker compose`), `compose.yaml` with no `version:` key, BuildKit, `npm ci --omit=dev`, `docker scout`.

## How the hands-on works

`<PlayWithDocker>` (`src/components/PlayWithDocker.tsx`) shows the snippet and a "Try in Play with Docker ↗" button. Clicking it copies the snippet to your clipboard and opens [labs.play-with-docker.com](https://labs.play-with-docker.com/) — a free, browser-based, real Docker environment — where you paste and run. (No per-snippet injection API exists, so it's copy + open.)

## Deployment

Fully static (`output: 'static'`) → `dist/`. Deploys to GitHub Pages via `.github/workflows/deploy.yml` (build with `withastro/action` on Node 22, publish with `actions/deploy-pages`).

One-time setup: create the repo, push `main`, set **Settings → Pages → Source: GitHub Actions**. Base path in `astro.config.mjs`: `site: 'https://avetavos.github.io'`, `base: '/docker-from-zero-to-hero'`. If you change `base`, update the base-prefixed links in `src/content/docs/{en,th}/index.mdx`.
