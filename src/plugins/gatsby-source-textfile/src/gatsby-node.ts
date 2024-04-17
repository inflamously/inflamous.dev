import {
  CreateNodeArgs,
  GatsbyNode,
  PluginCallback,
  PluginOptions,
} from "gatsby"
import { readFileSync } from "fs"

export const shouldOnCreateNode: GatsbyNode["shouldOnCreateNode"] = ({
  node,
}: {
  node: Record<"internal", { mediaType: string }>
}): boolean => {
  return node?.internal?.mediaType === "text/plain"
}

export const onCreateNode: GatsbyNode["onCreateNode"] = async (
  { node, actions, createNodeId, createContentDigest }: CreateNodeArgs,
  options: PluginOptions
) => {
  const { createNode, createParentChildLink } = actions
  const { absolutePath, name, id, parent, ext } = node
  const { leafDirectory } = options

  console.log("processing plugin with options", options)

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

  if (leafDirectory) {
    // TODO: Query only from leaf directory
  }

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
