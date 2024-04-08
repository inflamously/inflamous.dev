import { Header } from "./layout/header"
import Content from "./layout/content"
import Footer from "./layout/footer"
import "../pages/layout.css"
import { ReactNode } from "react"

const Layout = (props: { children?: ReactNode }) => {
  return (
    <div className="layout">
      <Header />
      {props?.children ? props.children : <Content />}
      <Footer />
    </div>
  )
}

export default Layout
