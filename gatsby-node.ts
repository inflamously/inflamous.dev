/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */
import { GatsbyNode } from "gatsby"
import { GatsbyIterable } from "gatsby/dist/datastore/common/iterable"

const onCreateBabelConfig: GatsbyNode["onCreateBabelConfig"] = ({
  actions,
}) => {
  actions.setBabelPlugin({
    name: "@babel/plugin-transform-react-jsx",
    options: {
      runtime: "automatic",
    },
  })
}

const createResolvers: GatsbyNode["createResolvers"] = ({
  createResolvers,
}) => {
  createResolvers({
    MarkdownRemark: {
      path: {
        type: "String",
        resolve: async (source, _args, _context, _info) => {
          const path: string = source.fileAbsolutePath
          return path.substring(path.search("documents/"))
        },
      },
    },
    Query: {
      allDocuments: {
        type: ["MarkdownRemark"],
        resolve: async (source, args, context, _info) => {
          const results = await context.nodeModel.findAll({
            type: "MarkdownRemark",
            query: {
              filter: {
                fileAbsolutePath: { glob: "**/data/documents/*" },
              },
            },
          })

          const entries: GatsbyIterable<{
            fileAbsolutePath: string
            path: string
          }> = results?.entries ?? {}
          entries.map(entry => {
            entry.path = entry.fileAbsolutePath
            return entry
          })

          console.log(entries)

          return entries
        },
      },
    },
  })
}

const createSchemaCustomization: GatsbyNode["createSchemaCustomization"] = ({
  actions,
  schema,
}) => {}

exports.createSchemaCustomization = createSchemaCustomization
exports.createResolvers = createResolvers
exports.onCreateBabelConfig = onCreateBabelConfig
