import { Header } from "./layout/header"
import { ReactNode } from "react"
import Content from "./layout/content"
import Footer from "./layout/footer"

const Layout = (props: { children: ReactNode }) => {
  const { children } = props
  return (
    <div>
      <Header />
      <Content>
        {children}
      </Content>
      <Footer/>
    </div>
  )
}

export default Layout
