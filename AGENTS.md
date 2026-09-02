## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)

## Cursor Cloud specific instructions

This is a static Astro 7 content site. There is no backend, database, or required env vars — nothing to provision beyond installing dependencies (`pnpm install`, handled by the startup update script).

Services and commands (all use `pnpm`, per `pnpm-lock.yaml`; scripts are in `package.json`):

- Dev server: `pnpm dev` serves on `http://localhost:4321/`. It is the only long-running service. AGENTS.md's `astro dev --background` variant works too; use `astro dev stop/status/logs` to manage it.
- Type check / lint: `pnpm astro check`.
- Build: `pnpm build` (static output to `dist/`).

Content authoring is the core feature. Adding a Markdown file under `src/content/{writing,projects,pages}` with valid frontmatter (schemas in `src/content.config.ts`) makes it appear in the corresponding list and detail route via dev-server hot reload — no restart needed. Files in `src/content/inbox/` are intentionally NOT a registered collection and never produce public pages.
