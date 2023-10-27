# SvelteKit - Project Template++

![Svelte](https://img.shields.io/badge/svelte-%23f1413d.svg?style=for-the-badge&logo=svelte&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)

[![commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![gitHub license](https://badgen.net/github/license/jonasfroeller/sveltekit-projecttemplate-business)](https://github.com/jonasfroeller/sveltekit-projecttemplate-business/blob/main/LICENSE)
[![Buymeacoffee](https://badgen.net/badge/icon/buymeacoffee?icon=buymeacoffee&label)](https://buymeacoffee.com/jonasfroeller)

## Info

This template is an extended version of [sveltekit-projecttemplate-hobby](https://github.com/jonasfroeller/sveltekit-projecttemplate-hobby).

## Deployment

The project can be deployed to Vercel, Netlify or Cloudflare-Pages.

[![Vercel](https://therealsujitk-vercel-badge.vercel.app/?app=sveltekit-projecttemplate-business.vercel.app)](https://sveltekit-projecttemplate-business.vercel.app)
![CloudflarePages](https://img.shields.io/website/https/sveltekit-projecttemplate-business.pages.dev?logo=cloudflarepages&label=cloudlare)
![Netlify](https://img.shields.io/website/https/sveltekit-projecttemplate-business.netlify.app?logo=netlify&label=netlify)

## Tech Stack

### Frontend & Testing

-   **JS-Framework**: [SvelteKit](https://kit.svelte.dev/docs/creating-a-project)
-   **CSS-Utility-Class-Library**: [TailwindCSS](https://tailwindcss.com/docs/guides/sveltekit)
    -   [@tailwindcss/typography](https://tailwindcss.com/docs/typography-plugin)
    -   [@tailwindcss/aspect-ratio](https://github.com/tailwindlabs/tailwindcss-aspect-ratio)
    -   [@tailwindcss/container-queries](https://github.com/tailwindlabs/tailwindcss-container-queries)
-   **Form-Validation**: [sveltekit-superforms & zod](https://github.com/ciscoheat/sveltekit-superforms)
-   **Icons**: [iconify](https://iconify.design/docs/icon-components/svelte/)
-   **UI-Components**: [shadcn-svelte](https://www.shadcn-svelte.com/)
-   **Commits**: [commitizen/cz-conventional-changelog](https://github.com/commitizen/cz-cli)
-   **Testing**:
    -   Unit: [Vitest](https://vitest.dev/)
    -   Browser: [Playwright](https://playwright.dev/)
-   **Code-Formatting**: [Prettier](https://prettier.io/)
-   **Code-Linting**: [Eslint](https://eslint.org/)

---

### Backend & Database

-   **Authentication**: [Lucia](https://lucia-auth.com/getting-started/sveltekit/)
-   **CMS**: [BuilderIO](https://www.builder.io/c/docs/developers)
-   **Database ([view supported](#supported-databases))**: [Planetscale](https://planetscale.com/).
    -   **ORM**: [Prisma](https://www.prisma.io/docs/getting-started/setup-prisma/add-to-existing-project/relational-databases-typescript-planetscale)
-   **Database Cache**:
    -   **Redis Database**: [Upstash](upstash.com)
    -   **Redis Client**: [ioredis](https://github.com/redis/ioredis)
    -   **Redis Middleware**: [prisma-redis-middleware](https://github.com/Asjas/prisma-redis-middleware)

#### Supported Databases

Any database Prisma supports. For example MySQL, PostgreSQL or MongoDB.

-   [list of existing lucia auth database adapters (including prisma adapter)](https://lucia-auth.com/basics/database/)
-   [list of supported databases for prisma ORM](https://www.prisma.io/docs/reference/database-reference/supported-databases)

---

### Other Included Packages

-   **Developer Experience**
    -   **Styling**: [sass](https://sass-lang.com/)
-   **Performance**:
    -   **HTML/CSS/JS Minifier**: [html-minifier](https://www.npmjs.com/package/html-minifier)
-   **Accessibility**:
    -   **CSS**: [autoprefixer](https://autoprefixer.github.io/)
    -   **Font**: [rtlcss](https://rtlcss.com/)
-   **Progressive Web App**
    -   **icons/favicons**: [pwa-asset-generator](https://www.npmjs.com/package/pwa-asset-generator)
-   **CI/CD**
    -   **Parallel NPM**: [pnpm-run-all](https://www.npmjs.com/package/pnpm-run-all)
    -   **Git Hooks**: [husky](https://typicode.github.io/husky/)
    -   **Commit Helper**: [commitizen](https://github.com/commitizen/cz-cli)

---

### Assets

**How-To-Write-SCSS**: [bem](https://getbem.com/)  
**Fonts (google fonts but privacy-friendly)**: [api.fonts.coollabs.io](https://docs.coollabs.io/fonts/get-started)

## Development

### Important Commands

```bash
# install dependencies
pnpm i

# run development sever
pnpm run all

# or start the server and open the app in a new browser tab
pnpm run all -- --open

# build project
pnpm run build

# preview build
pnpm run preview

# skip husky
<git-command> --no-verify
```

## Contributing

Install [commitizen](https://github.com/commitizen/cz-cli)

```bash
pnpm add -g commitizen
```

#### Usage

Use `pnpm run commit` or `npx cz` instead of `git commit -m "..."`  
Use `pnpm run prepare` before committing the first time.
