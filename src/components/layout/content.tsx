import { ReactNode } from "react"

const Content = (props: { children: ReactNode }) => {
  const { children } = props

  return <div
    style={{
      margin: `0 auto`,
      maxWidth: `var(--size-content)`,
      padding: `var(--size-gutter)`
    }}
  >
    <main>{children}</main>
  </div>
}

export default Content