import { graphql } from "gatsby"

export const licenseTextBlock = graphql`
  query LicenseBlockQuery($filename: String!) {
    allTextFile(filter: { name: { eq: $filename } }) {
      nodes {
        name
        content
      }
    }
  }
`

export const LicenseBlock = (props: { filename: string }) => {
  const { filename } = props

  return (
    <span
      style={{
        whiteSpace: "pre-wrap",
      }}
    >
      License Text
    </span>
  )
}
