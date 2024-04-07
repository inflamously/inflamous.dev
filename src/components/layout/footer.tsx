import { Link } from "gatsby"
import "./footer.css"
import { FooterHints } from "./footer-hints"

const Footer = () => {
  return (
    <footer
      className="footer"
      style={{
        marginTop: `var(--space-5)`,
        fontSize: `var(--font-sm)`,
      }}
    >
      <FooterHints />
      <br />
      <br />
      <Link to="/licenses">License</Link>
    </footer>
  )
}

export default Footer
