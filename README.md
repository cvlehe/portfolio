# Charles von Lehe — Engineering portfolio

A React portfolio built with Vite. The production build prerenders the page into HTML, so the content and native case-study disclosure panels are available before JavaScript loads.

## Run locally

Requires Node.js 22.12+.

```sh
npm ci
npm run dev
```

Open the local URL printed by Vite. The résumé PDF is served from `public/`.

## Build and publish

```sh
npm run build
npm run preview
```

Publish the **contents of `dist/`** to a static host. The build uses relative asset paths, so it works at the domain root or under a project path. Deploying the source directory directly will not work.

### GitHub Pages

This repository includes `.github/workflows/deploy.yml`. It builds the site and publishes `dist/` whenever a commit reaches `main`.

The current GitHub Pages source is `main` at the repository root. To switch it to the React build:

1. In [repository Pages settings](https://github.com/cvlehe/portfolio/settings/pages), change **Build and deployment → Source** to **GitHub Actions**.
2. Commit and push the React conversion and deployment workflow to `main`.
3. Check the **Deploy portfolio to GitHub Pages** run in the repository's Actions tab. After it succeeds, the site is at <https://cvlehe.github.io/portfolio/>.

## Customize

- Add a LinkedIn or GitHub URL only if you want it visible; no links were guessed.
- Replace the conceptual diagrams with screenshots you have permission to publish, or add public GitHub demos.
- Add reliable project metrics only where you can substantiate them.
- Verify descriptions of employer projects against your confidentiality obligations.

Project diagrams are intentionally illustrative; they are not screenshots or internal system diagrams. SlicerMD is explicitly identified as a personal work in progress.
