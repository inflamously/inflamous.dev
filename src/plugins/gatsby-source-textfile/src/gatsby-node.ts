import { GatsbyNode } from "gatsby"
import { readFileSync } from "fs"

const shouldOnCreateNode: GatsbyNode["shouldOnCreateNode"] = ({
  node,
}: {
  node: Record<
    string,
    {
      mediaType: string
    }
  >
}) => node.internal.mediaType === "text/plain"

const onCreateNode: GatsbyNode["onCreateNode"] = async ({
  node,
  actions,
  loadNodeContent,
  createNodeId,
  createContentDigest,
}) => {
  const { createNode, createParentChildLink } = actions
  const { absolutePath, name, id, parent, ext } = node

  console.log("processing node with id: ", id)

  if (
    !id ||
    id?.length <= 0 ||
    typeof absolutePath !== "string" ||
    typeof name !== "string" ||
    (typeof ext !== "string" && ext !== ".txt")
  ) {
    return
  }

  console.log("reading file")

  const textData = readFileSync(absolutePath, {
    encoding: "utf8",
  })

  console.log("creating node")

  await createNode({
    id: createNodeId(node.id),
    absolutePath,
    name,
    ext,
    content: textData,
    parent,
    internal: {
      type: "TextFile",
      contentDigest: createContentDigest(textData),
    },
  })
}

exports.shouldOnCreateNode = shouldOnCreateNode
exports.onCreateNode = onCreateNode
