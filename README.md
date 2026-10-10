# senpawaii.github.io

Personal site, built as a one-screen "factory floor": each station opens a panel (About, Stack, Resume, Contact, Projects) and each has its own URL hash, e.g. `/#projects`.

- **Stack:** [Astro](https://astro.build) (static output, no client framework), plain CSS, one small inline script.
- **Content:** all text lives in `src/data/content.ts`, and the panels are in `src/pages/index.astro`.
- **Scene:** `src/components/` (`Floor`, `Station`, `Robot`).

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
```

## Deploy

`.github/workflows/deploy.yml` builds and publishes to GitHub Pages on every push to `main`.
In the repo settings, set **Pages → Source** to **GitHub Actions** once.
