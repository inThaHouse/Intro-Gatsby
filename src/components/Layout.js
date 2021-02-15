import React from 'react'
import { Global, css } from '@emotion/react'
import Header from './Header'
import Helmet from 'react-helmet'
import useSiteMetadata from '../hooks/use-sitemetadata'

// protip : name your components for an easier time debugging.
const Layout = ({ children }) => {
  const { title, description } = useSiteMetadata()

  return (
    <>
      <Global
        styles={css`
          * {
            box-sizing: border-box;
            margin: 0;
          }

          // every sibling selector will get this style
          // This styling normalizes vertical spacing.
          * + * {
            margin-top: 1rem;
          }

          html,
          body {
            margin: 0;
            color: #555;
            font-family: 'Segoe UI', Roboto;
            font-size: 18px;
            line-height: 1.4;

            // Previously we normalized vertical spacing with a margin-top
            // We will have to remove that spacing for the main div that Gatsby mounts.
            // id of that div should be ___gatsby
            > div {
              margin-top: 0;
            }
          }

          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            color: #222;
            line-height: 1.1;

            + * {
              margin-top: 0.5rem;
            }
          }

          strong {
            color: #222;
          }

          li {
            margin-top: 0.25rem;
          }
        `}
      />
      <Helmet>
        <html lang='en' />
        <title>{title}</title>
        <meta name='description' content={description} />
      </Helmet>
      <Header />
      <main
        css={css`
          margin: 2rem auto;
          max-width: 90vw;
        `}
      >
        {children}
      </main>
    </>
  )
}

export default Layout
