import { graphql, PageProps } from "gatsby"

const LicenseBreak = () => <>
  - - - -
  <br />
  <br /></>

const LicenseBlock = (props: PageProps) => {
  console.log(props.children)
  return <span
    style={{
      whiteSpace: "pre-wrap"
    }}
  >
    {props.children}
  </span>
}

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
      <div>
        The BSD Zero Clause License (0BSD)
        <br />
        <br />
        Copyright (c) 2020 Gatsby Inc.
        <br />
        <br />
        Permission to use, copy, modify, and/or distribute this software for any
        <br />
        purpose with or without fee is hereby granted.
        <br />
        THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
        WITH
        <br />
        REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
        MERCHANTABILITY
        <br />
        AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL,
        DIRECT,
        <br />
        INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING
        FROM
        <br />
        LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT,
        NEGLIGENCE OR
        <br />
        OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
        <br />
        PERFORMANCE OF THIS SOFTWARE.
        <br />
      </div>
      <LicenseBreak />
      <LicenseBlock filename="ofl.txt" />
    </div>
  )
}

export default LicensesPage
