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
            image {
              childImageSharp {
                fluid(maxWidth: 100, maxHeight: 100) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
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
    image: post.frontmatter.image,
  }))
}

export default useBlogPosts
