# Manohar D — React Portfolio

A responsive multi-page portfolio website built with **React**, **Vite**, **React Router**, and **Lucide icons**. Includes locally stored SVG illustrations and separate routes for Home, About, Experience, Projects, Certifications, and Contact.

## Run locally

Requirements: Node.js 18+ and npm.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (usually `http://localhost:5173`).

To test a production build:

```bash
npm run build
npm run preview
```

## Publish on GitHub Pages

### Recommended: GitHub Actions deployment
Because this is a Vite + React app, it must be built before publishing. For a username-based site at `https://manohar-vibe-coder.github.io/`, create a repository named exactly `Manohar-vibe-coder.github.io`.

1. Create the repository on GitHub and upload the contents of this ZIP (not the ZIP itself).
2. In the repository, open **Settings → Pages**.
3. Under **Build and deployment**, choose **GitHub Actions**.
4. Add the workflow below at `.github/workflows/deploy.yml`.
5. Commit and push. After the workflow succeeds, the site will be live at `https://manohar-vibe-coder.github.io/`.

```yaml
name: Deploy React portfolio to GitHub Pages
on:
  push:
    branches: [main]
  workflow_dispatch:
permissions:
  contents: read
  pages: write
  id-token: write
concurrency:
  group: pages
  cancel-in-progress: true
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
      - run: npm install
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: dist
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - uses: actions/deploy-pages@v4
        id: deployment
```

**Important:** This configuration is for the username-based root URL. If you publish under a repository URL such as `https://manohar-vibe-coder.github.io/portfolio/`, set `base: '/portfolio/'` in `vite.config.js` and update the workflow accordingly.

## Personalize before publishing

- Review the experience dates and credential names in `src/data.js`.
- Only add an exam/certification to the certifications page once the credential has been issued.
- Update the contact email and profile links in `src/data.js`.
- The illustrations in `public/images/` are local SVG assets, so they do not depend on third-party image hosts.
