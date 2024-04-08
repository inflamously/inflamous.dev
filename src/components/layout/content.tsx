import "./content.css"
import { graphql, useStaticQuery } from "gatsby"

const Content = () => {
  const data = useStaticQuery(query)

  return (
    <div className="content">
      <main>
        <p>Home</p>
        <p>This page contains resources to navigate to other pages.</p>

        <div>Here you can navigate to other documents:</div>
        <ul>
          {data.allSitePage.nodes.map((node: { path: string }) => (
            <li key={node.path}>
              <a href={node.path}>{node.path.replace("/documents", "")}</a>
            </li>
          ))}
        </ul>
      </main>
    </div>
  )
}

const query = graphql`
  query Pages {
    allSitePage(filter: { path: { glob: "**/documents/*" } }) {
      nodes {
        path
      }
    }
  }
`

export default Content
