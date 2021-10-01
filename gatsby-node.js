const path = require('path');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const postTemplate = path.resolve('./src/templates/blog-post.js')

  return graphql(`
    query BlogIndexQuery {
    allMarkdownRemark {
      edges {
        node {
          html
          id
          frontmatter {
            path
            title
            date
            author
          }
          excerpt
        }
      }
    }
  }
  `, { limit: 1000 }).then(res => {
    if (res.errors) {
      throw res.errors
    }

    res.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: postTemplate,
        context: {

        },
      })
    })
  })
}