# README

This is a [Next.js](https://nextjs.org/) plus [Tailwind CSS](https://tailwindcss.com) boilerplate for LAVLI web projects. Although it has some LAVLI defaults and settings (e.g. colors), feel free to use it as a starting point for your project.

## Quick start

1. Clone the repository
2. Run `yarn install` (or `npm install`, but we prefer using [Yarn package manager](https://yarnpkg.com))
3. Run `yarn dev` to start the development server.
4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## What's inside?

A quick look at the top-level files and directories you'll see after install.

    .
    ├── node_modules/
    ├── public/
    ├── src/
    ├── .editorconfig
    ├── .env.sample
    ├── .eslintrc.json
    ├── .gitignore
    ├── .npmrc
    ├── .prettierignore
    ├── .prettierrc.json
    ├── CHANGELOG.md
    ├── jsconfig.json
    ├── LICENSE.md
    ├── next.config.js
    ├── package.json
    ├── postcss.config.js
    ├── README.md
    ├── tailwind.config.js
    └── yarn.lock

1. **`/node_modules`**: This directory contains all of the modules of code that
   your project depends on.

2. **`/public`**: This is where Next.js can serve static files from, like images. Files inside public can be referenced by your code starting from the base URL (/).

3. **`/src`**: This directory contains your code. `src` is a convention for “source code”.

4. **`.editorconfig`**: [EditorConfig](https://editorconfig.org) helps maintain consistent coding styles for multiple developers working on the same project across various editors and IDEs. This is our desired setting.

5. **`.env.sample`**: If your project needs ENV vars, put the skeleton/name of your vars in here so people know what vars you need to set up in your `.env` files. **BUT NEVER EVER EXPOSE ANY SECRETS HERE!**

6. **`.eslintrc.json`**: ESLint configuration file.

7. **`.gitignore`**: This file tells git which files it should not track/not
   maintain a version history for.

8. **`.npmrc`**: Config file for `npm` where we tell it not to create a package-lock.json file since we use yarn.

9. **`.prettierignore`**: See `.gitignore` – just for [Prettier](https://prettier.io/)...

10. **`.prettierrc`**: This is a configuration file for
    [Prettier](https://prettier.io/). Prettier is a tool to help keep the
    formatting of your code consistent.

11. **`CHANGELOG.md`**: The project changelog.

12. **`jsconfig.json`**: Next.js automatically supports the tsconfig.json and jsconfig.json "paths" and "baseUrl" options since Next.js 9.4. These options allow you to configure module aliases, for example a common pattern is aliasing certain directories to use absolute paths.

13. **`LICENSE`**: This boilerplate is licensed under the MIT license.

14. **`next.config.js`**: (Advanced) configuration of Next.js. `next.config.js` is a regular Node.js module, not a JSON file. It gets used by the Next.js server and build phases, and it's not included in the browser build.

15. **`package.json`**: A manifest file for Node.js projects, which includes
    things like metadata (the project’s name, author, etc). This manifest is how `yarn` (or `npm`) knows which packages to install for your project. We included some default packages we pretty much use in any Next.js project.

16. **`postcss.config.js`**: [PostCSS](https://postcss.org) config for [Tailwind CSS](https://tailwindcss.com).

17. **`README.md`**: This README file.

18. **`tailwind.config.js`**: Tailwind config file.

19. **`yarn.lock`** Your yarn.lock file is auto-generated and should be
    handled entirely by Yarn. As you add/upgrade/remove dependencies with the
    Yarn CLI, it will automatically update your yarn.lock file.
    **(Don't change this file directly).**

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Deployment

Check out [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
