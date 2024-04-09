import { graphql, PageProps, useStaticQuery } from "gatsby"
import Layout from "../../components/layout"

const DocumentTemplate = (props: PageProps) => {
  return (
    <Layout>
      <div
        dangerouslySetInnerHTML={{
          __html: props.data.markdownRemark.html ?? "<p>Document not found</p>",
        }}
      />
    </Layout>
  )
}

export const query = graphql`
  query ($frontmatter__slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $frontmatter__slug } }) {
      html
      frontmatter {
        title
        date
        slug
      }
    }
  }
`

export default DocumentTemplate
