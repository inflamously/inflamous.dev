import { GatsbyConfig, GatsbyNode } from "gatsby"

const shouldOnCreateNode: GatsbyNode["shouldOnCreateNode"] = ({
  node,
}: {
  node: Record<
    string,
    {
      mediaType: string
    }
  >
}) => {
  return node?.internal?.mediaType === `text/plain` ?? false
}

const onCreateNode: GatsbyNode["onCreateNode"] = async ({
  node,
  actions,
  loadNodeContent,
  createNodeId,
  createContentDigest,
}) => {
  const transformText = () => {}

  console.log(node)
}

exports.shouldOnCreateNode = shouldOnCreateNode
exports.onCreateNode = onCreateNode
