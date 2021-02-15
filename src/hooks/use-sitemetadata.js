import { useStaticQuery, graphql } from 'gatsby'

const useSiteMetadata = () => {
  // protip: query can easily be copy pasted from the gql playground.
  const { site } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)

  return site.siteMetadata
}

export default useSiteMetadata
