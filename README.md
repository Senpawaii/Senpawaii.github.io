# senpawaii.github.io

Personal site. A profile column and a tabbed content card (About, Experience, Projects, Stack, Contact) sit over an animated factory, where a crew of chibi agents works the conveyor lines. Each tab has its own URL hash, e.g. `/#projects`.

- **Stack:** [Astro](https://astro.build) (static output, no client framework), plain CSS, one small inline script.
- **Content:** all text lives in `src/data/content.ts`, and the tab panels are in `src/pages/index.astro`.
- **Backdrop:** `src/components/` (`Backdrop`, `Machine`, `Chibi`).

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
```

## Deploy

`.github/workflows/deploy.yml` builds and publishes to GitHub Pages on every push to `master`.
In the repo settings, set **Pages → Source** to **GitHub Actions** once.
