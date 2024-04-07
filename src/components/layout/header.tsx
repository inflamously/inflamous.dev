import { graphql, Link, useStaticQuery } from "gatsby"
import "./header.css"

export const Header = () => {
  const data = useStaticQuery(query)

  return <header
    className="header"
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