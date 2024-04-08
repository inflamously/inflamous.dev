import { graphql, PageProps, useStaticQuery } from "gatsby"
import Layout from "../../components/layout"

const DocumentTemplate = (props: PageProps) => {
  const data = useStaticQuery(query)

  return (
    <Layout>
      <div
        dangerouslySetInnerHTML={{
          __html: data?.markdownRemark?.html ?? "",
        }}
      />
    </Layout>
  )
}

const query = graphql`
  query MarkdownDocument($id: String) {
    markdownRemark(id: { eq: $id }) {
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
