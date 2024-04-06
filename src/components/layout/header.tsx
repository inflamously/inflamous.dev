import { graphql, Link, PageProps, useStaticQuery } from "gatsby"

export const Header = () => {
  const data = useStaticQuery(query)

  return <header
    style={{
      margin: `0 auto`,
      padding: `var(--space-4) var(--size-gutter)`,
      display: `flex`,
      alignItems: `center`,
      justifyContent: `space-between`
    }}
  >
    <Link to="/">{data.appJson?.title}</Link>
  </header>
}

export const query = graphql`
  query App {
    appJson {
      title
    }
  }
`