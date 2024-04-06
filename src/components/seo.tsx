/**
 * SEO component that queries for data with
 * Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { ReactNode } from "react"

function Seo(props: { description: string, title: string, children?: ReactNode }) {
  const { description, title, children } = props

  return (
    <>
      <title>{`Title`}</title>
      {/*<meta name="description" content={metaDescription} />*/}
      {/*<meta property="og:title" content={title} />*/}
      {/*<meta property="og:description" content={metaDescription} />*/}
      {/*<meta property="og:type" content="website" />*/}
      {children}
    </>
  )
}

export default Seo
