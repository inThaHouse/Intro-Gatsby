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

  return {
    title: '',
    author: '',
    slug: '',
    except: '',
  }
}

export default useBlogPosts
