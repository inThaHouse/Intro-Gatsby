# Intro To Gatsby

This repo hosts code/notes taken from the course https://frontendmasters.com/courses/gatsby/

## My own notes

<details>
  <summary>Intro</summary>

### Challenges of modern web dev.

- Getting started is overwhelming. There are many different tools that does the same thing.
- The way we manage data is changing. No longer we have to pull data from monolithic cms, where everything comes from a single code base.
- Getting it right is tough. Many subset of web dev can be it's own career.

### Gatsby goal

- To allow devs to quickly build apps/sites.
- Eliminate boilerplate to get started & deploying to prod.

### Content Mesh

- Orchestration layer for taming the content mesh and its many sources of data.
- CMS providers are shifting from monolithic to headless Api.
- Stitches data sources from various apis to form one content mesh layer.
- Plug many services from various providers that do one thing well into an unified graphql api.
- Gatsby is actually serving progressive web apps.
- There are claims that the future of web dev is content mesh.

### Fast Websites by Default

- Gatsby, out of the box, ships with good config defaults for performance / quality of life. (PRPL pattern : https://web.dev/apply-instant-loading-with-prpl/)
- Generates only static assets.
- Assets are optimized and lazy loaded.
- Configs are fully customizable without ejecting the whole thing.

</details>

<details>
  <summary>Gatsby Basics</summary>

### Pages

1. Folder structure for pages should be `src/pages`.
2. Create a file in the `pages` folder and add react component. You should be able to see the page when you navigate to the path of that named file. (ex: `src/about.js`, then go to `http://localhost:8000/about`)
3. Gatsby file system routing is powered by Reach Router. https://reach.tech/router/

### Styling

- Gatsby is flexible in how you want to style your app.
- Vanilla css, css modules, css-in-js? No problem.
- If you need plugins to build your styling solutions properly, you can do it via `gatsby-config.js`. (Optional, more info at https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/)

### Graphql

- By default, in development, you can access the playground at http://localhost:8000/\_\_\_graphql
- `src/hooks/use-sitemetadata.js` has an example on how you can leverage gatsby utils to build your query and return data from it.
- More info at https://www.gatsbyjs.com/docs/reference/graphql-data-layer/graphql-api/
</details>

<details>
  <summary>Using MDX</summary>

- Allows react components to be in markdown files.
- You can programmatically create pages (like blog posts) using gatsby node api. https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/#createPages

</details>
