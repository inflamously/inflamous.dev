import { graphql, PageProps } from "gatsby"
import { LicenseBlock } from "../components/license-block"

const LicenseBreak = () => <>
  - - - -
  <br />
  <br /></>



export const licenseQuery = graphql`
  query Licenses {
    allFile(filter: { sourceInstanceName: { eq: "licenses" } }) {
      nodes {
        name
        childMarkdownRemark {
          html
        }
      }
    }
  }
`

const LicensesPage = () => {
  return (
    <div>
      <h4>
        Included licenses and referenced works at{" "}
        <a href="https://www.nflamously.dev">nflamously.dev</a>
      </h4>
      <LicenseBreak />
      <LicenseBlock filename="gatsby" />
      <LicenseBreak />
      <LicenseBlock filename="ofl" />
    </div>
  )
}

export default LicensesPage
