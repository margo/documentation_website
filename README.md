# margo-docs

This repository contains the Next.js site that serves [docs.margo.org](https://docs.margo.org). It assembles content from multiple repositories into a single documentation website.

## Repositories and responsibilities

- `margo-docs`
  The website application. This is where the Next.js app, Fumadocs configuration, MDX components, Netlify config, and the content sync pipeline live.
- `general_website_content`
  General documentation pages that are copied from `system-design/` into the website.
- `specification`
  Specification pages, OpenAPI files, MkDocs assets, and LinkML-generated Markdown that are copied from `system-design/specification/` into the website.

## Where the website code lives

- [package.json](/Users/osama/Desktop/Others/margo/margo-docs/package.json)
  Top-level scripts for sync, development, and production build.
- [scripts/sync-general-content.sh](/Users/osama/Desktop/Others/margo/margo-docs/scripts/sync-general-content.sh)
  The content assembly pipeline. This is the key script that pulls content from the other repos and prepares it for the site.
- [app/layout.tsx](/Users/osama/Desktop/Others/margo/margo-docs/app/layout.tsx)
  Global layout, metadata, and sidebar tree composition.
- [app/[...slug]/page.tsx](/Users/osama/Desktop/Others/margo/margo-docs/app/[...slug]/page.tsx)
  Catch-all documentation page renderer.
- [lib/source.ts](/Users/osama/Desktop/Others/margo/margo-docs/lib/source.ts)
  Fumadocs content loader used to resolve pages and routes.
- [source.config.ts](/Users/osama/Desktop/Others/margo/margo-docs/source.config.ts)
  MDX collection and remark plugin configuration.
- [mdx-components.tsx](/Users/osama/Desktop/Others/margo/margo-docs/mdx-components.tsx)
  Custom MDX components available in documentation pages.
- [components/mdx/swagger-ui.tsx](/Users/osama/Desktop/Others/margo/margo-docs/components/mdx/swagger-ui.tsx)
  Swagger UI wrapper used by generated OpenAPI pages.
- [next.config.mjs](/Users/osama/Desktop/Others/margo/margo-docs/next.config.mjs)
  Next.js configuration, including redirects for legacy documentation routes.
- [netlify.toml](/Users/osama/Desktop/Others/margo/margo-docs/netlify.toml)
  Netlify build configuration for the production site.

## How the website is built

The website build is a two-stage process:

1. Sync and prepare content.
2. Run the Next.js production build.

### Stage 1: Sync and prepare content

`npm run sync:docs` runs [scripts/sync-general-content.sh](/Users/osama/Desktop/Others/margo/margo-docs/scripts/sync-general-content.sh).

That script does the following:

1. Pulls content from `general_website_content`.
   It copies `system-design/` into `margo-docs/content/docs/`.
2. Pulls content from `specification`.
   It copies `system-design/specification/` into `margo-docs/content/docs/specification/`.
3. Optionally regenerates LinkML documentation from the `specification` repo.
   If `poetry` is installed, it runs the spec repo’s generation flow.
   If `poetry` is not available but `linkml` and `mkdocs` are available, it runs those directly.
   If those tools are missing, the site still builds, but LinkML-generated pages are not refreshed.
4. Creates `meta.json` for the specification section.
5. Copies shared figure assets into `public/figures/`.
6. Generates Swagger UI MDX pages next to matching OpenAPI YAML files.
7. Copies OpenAPI YAML files into `public/` so Swagger UI can fetch them at runtime.
8. Rewrites known legacy Swagger links to the current generated route.
9. Normalizes Markdown titles into frontmatter for Fumadocs.

The generated site content in `content/docs/` is intentionally ignored by Git. It is treated as build output, not source of truth.

### Stage 2: Build the Next.js site

`npm run build` runs:

1. `prebuild`
   This runs `npm run sync:docs`.
2. `build`
   This runs `next build`.

The site is rendered by the catch-all route in [app/[...slug]/page.tsx](/Users/osama/Desktop/Others/margo/margo-docs/app/[...slug]/page.tsx), which loads pages through the Fumadocs source defined in [lib/source.ts](/Users/osama/Desktop/Others/margo/margo-docs/lib/source.ts).

## GitHub actions and deployment behavior

### In `margo-docs`

There are currently no checked-in GitHub Actions in this repository. Production deployment is configured through Netlify using [netlify.toml](/Users/osama/Desktop/Others/margo/margo-docs/netlify.toml).

Netlify runs:

```bash
npm run build
```

That means every Netlify deployment executes the sync script first, then builds the Next.js site.

### In `general_website_content`

- [general_website_content/.github/workflows/netlify-build.yml](/Users/osama/Desktop/Others/margo/general_website_content/.github/workflows/netlify-build.yml)
  Triggers a Netlify build hook on pushes to `pre-draft`.
- [general_website_content/.github/workflows/pr-checks.yml](/Users/osama/Desktop/Others/margo/general_website_content/.github/workflows/pr-checks.yml)
  Runs sign-off checks on pull requests.

Important detail: the `netlify-build.yml` workflow lives in `general_website_content`, but it triggers a build of the website hosted from `margo-docs`. During that Netlify build, `margo-docs` pulls the latest `pre-draft` content from both `general_website_content` and `specification`.

### In `specification`

- [specification/.github/workflows/pages.yml](/Users/osama/Desktop/Others/margo/specification/.github/workflows/pages.yml)
  Builds and deploys the standalone MkDocs site for the specification repo and runs validation/document-generation jobs.
- [specification/.github/workflows/pr-checks.yml](/Users/osama/Desktop/Others/margo/specification/.github/workflows/pr-checks.yml)
  Runs sign-off checks on pull requests.

Important detail: the `specification` repo’s `pages.yml` workflow does not deploy `docs.margo.org`. It builds the standalone MkDocs version of the specification. The website at `docs.margo.org` only picks up spec changes when a `margo-docs` Netlify build runs.

## How to render the full website locally

There are two supported local workflows:

- Preview against the remote `pre-draft` branches.
- Preview against local sibling checkouts of all three repos before opening PRs.

### Prerequisites

- Node.js and npm
- `git`
- `rsync`
- `jq`

Optional, but recommended for a full specification refresh:

- Python 3
- `poetry`

Alternative to `poetry`:

- `linkml`
- `mkdocs`

The Python dependencies used by the sync pipeline are listed in [requirements.txt](/Users/osama/Desktop/Others/margo/margo-docs/requirements.txt).

### Install website dependencies

From `margo-docs`:

```bash
npm install
```

### Option A: Preview using remote `pre-draft` content

This is the simplest flow and matches what Netlify does by default.

```bash
cd /Users/osama/Desktop/Others/margo/margo-docs
npm run dev
```

This will:

1. Clone `general_website_content` `pre-draft` into `.cache/`.
2. Clone `specification` `pre-draft` into `.cache/`.
3. Assemble `content/docs/`.
4. Start the Next.js dev server.

Open [http://localhost:3000](http://localhost:3000).

### Option B: Preview local changes from all repos before submitting PRs

Use this when you are editing `general_website_content` and/or `specification` locally and want `margo-docs` to render those unmerged changes.

The sync script supports two environment variables:

- `GENERAL_WEBSITE_CONTENT_DIR`
- `SPECIFICATION_DIR`

If they are set, the website uses those local directories instead of cloning from GitHub.

If your local layout matches this workspace:

- `/Users/osama/Desktop/Others/margo/margo-docs`
- `/Users/osama/Desktop/Others/margo/general_website_content`
- `/Users/osama/Desktop/Others/margo/specification`

run either:

```bash
cd /Users/osama/Desktop/Others/margo/margo-docs
npm run dev:local-content
```

or explicitly:

```bash
cd /Users/osama/Desktop/Others/margo/margo-docs
export GENERAL_WEBSITE_CONTENT_DIR=/Users/osama/Desktop/Others/margo/general_website_content
export SPECIFICATION_DIR=/Users/osama/Desktop/Others/margo/specification
npm run dev
```

For a production-style local build with local source repos:

```bash
cd /Users/osama/Desktop/Others/margo/margo-docs
npm run build:local-content
```

### What to expect if LinkML or MkDocs tooling is missing

The sync script will still copy Markdown and OpenAPI files, but it will print:

```text
Skipping LinkML documentation generation (missing dependencies)
```

That is acceptable for many editorial changes, but not ideal if your change depends on regenerated spec artifacts. For full fidelity, install the Python tooling first.

### Recommended pre-PR local validation

For content contributors and SUP owners, the safest check is:

```bash
cd /Users/osama/Desktop/Others/margo/margo-docs
npm run build:local-content
```

This validates the combined site using your local `general_website_content` and `specification` checkouts.

## Contributor workflow for SUP owners

If a SUP owner needs to validate documentation changes before opening PRs:

1. Update content in `general_website_content` and/or `specification`.
2. In `margo-docs`, run `npm run dev:local-content` to preview the complete site.
3. Check the relevant rendered routes in the browser.
4. Run `npm run build:local-content` before submitting PRs.
5. Open PRs in the source repo or repos that contain the actual content changes.

## Source of truth rules

- Do not edit `margo-docs/content/docs/` directly for permanent content changes.
  That directory is regenerated by the sync script.
- Edit `general_website_content` for general docs pages.
- Edit `specification` for spec pages, OpenAPI definitions, and LinkML-backed spec content.
- Edit `margo-docs` when the issue is in the website shell, routing, rendering, sync/build pipeline, or custom MDX components.
