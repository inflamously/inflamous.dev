import { Link } from "gatsby"

const Footer = () => {
  return <footer
    style={{
      marginTop: `var(--space-5)`,
      fontSize: `var(--font-sm)`
    }}
  >
    © {new Date().getFullYear()} &middot; Built with
    {` `}
    <a href="https://www.gatsbyjs.com">Gatsby</a>
    <Link to="/licenses"></Link>
  </footer>
}

export default Footer