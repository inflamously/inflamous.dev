import { Header } from "./layout/header"
import Content from "./layout/content"
import Footer from "./layout/footer"
import "../pages/layout.css"

const Layout = () => {
  return (
    <div className="layout">
      <Header />
      <Content />
      <Footer />
    </div>
  )
}

export default Layout
