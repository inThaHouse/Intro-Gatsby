import { graphql, useStaticQuery } from 'gatsby'

const useBlogPosts = () => {
  const { allMdx } = useStaticQuery(graphql`
    {
      allMdx {
        nodes {
          frontmatter {
            title
            slug
            author
          }

          excerpt
        }
      }
    }
  `)

  return allMdx.nodes.map((post) => ({
    title: post.frontmatter.title,
    author: post.frontmatter.author,
    slug: post.frontmatter.slug,
    except: post.excerpt,
  }))
}

export default useBlogPosts
