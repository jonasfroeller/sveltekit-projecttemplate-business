# SvelteKit - Project Template++

![Svelte](https://img.shields.io/badge/svelte-%23f1413d.svg?style=for-the-badge&logo=svelte&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)

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

-   **JS-Framework**: [SvelteKit](https://kit.svelte.dev/docs/creating-a-project)
-   **CSS-Utility-Class-Library**: [TailwindCSS](https://tailwindcss.com/docs/guides/sveltekit)
    -   _Including_: [@tailwindcss/typography](https://tailwindcss.com/docs/typography-plugin)
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

-   **Authentication**: [Lucia](https://lucia-auth.com/getting-started/sveltekit/)
-   **CMS**: [BuilderIO](https://www.builder.io/c/docs/developers)
-   **Database ([view supported](#supported-databases))**: [Planetscale](https://planetscale.com/).
    -   **ORM**: [Prisma](https://www.prisma.io/docs/getting-started/setup-prisma/add-to-existing-project/relational-databases-typescript-planetscale)
-   **Database Cache**:
    -   **Redis Database**: [Upstash](upstash.com)
    -   **Redis Client**: [ioredis](https://github.com/redis/ioredis)
    -   **Redis Middleware**: [prisma-redis-middleware](https://github.com/Asjas/prisma-redis-middleware)

## Supported Databases

Any database Prisma supports. For example MySQL, PostgreSQL or MongoDB.

[list of existing lucia auth database adapters (including prisma adapter)](https://lucia-auth.com/basics/database/)  
[list of supported databases for prisma ORM](https://www.prisma.io/docs/reference/database-reference/supported-databases)

## Development

### Important Commands

```bash
# install dependencies
npm i

# run development sever
npm run all

# or start the server and open the app in a new browser tab
npm run all -- --open

# build project
npm run build

# preview build
npm run preview
```

## Contributing

Use `npm run commit` instead of `git commit -m "..."`  
Use `npm run prepare` before committing the first time.
