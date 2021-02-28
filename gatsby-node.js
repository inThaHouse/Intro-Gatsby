// createPages and its params are from Gatsby api. See https://www.gatsbyjs.com/docs/tutorial/part-seven/ for more info.
exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    query {
      allMdx {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panic('failed to create posts', result.errors)
  }

  const posts = result.data.allMdx.nodes

  posts.forEach((post) => {
    actions.createPage({
      path: post.frontmatter.slug,
      component: require.resolve('./src/templates/post.js'),
      context: {
        slug: post.frontmatter.slug,
      },
    })
  })
}
