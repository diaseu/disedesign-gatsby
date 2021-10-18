import React from 'react'
import { Link, graphql } from 'gatsby';
import Layout from "../components/layout"

import "../styles/style.scss"

const BlogPage = ({ data }) => (
  <Layout>
    <section>
    <h1>Latest Blog Posts</h1>
    {data.allMarkdownRemark.edges.map(post => (
      <div key={post.node.id} className="card">
        <h3>{post.node.frontmatter.title}</h3>
        <small>Posted by {post.node.frontmatter.author} on {post.node.frontmatter.date}</small>
        <p>{post.node.excerpt}</p>
        <div style={{ textAlign: 'right' }}>
          <Link to={post.node.frontmatter.path}>Read More</Link>
        </div>
        <br />
        <hr />
      </div>
    ))}
    </section>
  </Layout>
)

export const pageQuery = graphql`
  query BlogIndexQuery {
    allMarkdownRemark {
      edges {
        node {
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
`

export default BlogPage
