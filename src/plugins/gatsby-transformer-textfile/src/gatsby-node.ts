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
  console.log(node)

  return true;
}

const onCreateNode: GatsbyNode["onCreateNode"] = async ({
  node,
  actions,
  loadNodeContent,
  createNodeId,
  createContentDigest,
}) => {
  const {createNode, createParentChildLink} = actions

  const transformText = () => {}

  // console.log(node)

  createNode({
    id: "test-id",
    test: "test",
    parent: node.id,
    internal: {
      type: "TextFileTestNode",
      contentDigest: createContentDigest("test"),
    }
  })
}

exports.shouldOnCreateNode = shouldOnCreateNode
exports.onCreateNode = onCreateNode
