/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */
import { GatsbyNode } from "gatsby"

const onCreateBabelConfig: GatsbyNode["onCreateBabelConfig"] = ({ actions }) => {
  actions.setBabelPlugin({
    name: "@babel/plugin-transform-react-jsx",
    options: {
      runtime: "automatic"
    }
  })
}

exports.onCreateBabelConfig = onCreateBabelConfig
