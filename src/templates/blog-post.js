import React from 'react'
import { Link, graphql } from 'gatsby'
// Components
import Layout from "../components/layout"

// Icons
// import { library, icon } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'

export default function Template({ data }) {
  const post = data.markdownRemark

  return(
    <Layout>
      <section>
        <Link to='/blog'><small>
          <FontAwesomeIcon icon={faChevronLeft} size="1x" style={{ color: '#fff', marginRight: '2vh' }} />
          Back to Blog Home</small></Link>
        <hr />
        <h1>{post.frontmatter.title}</h1>
        <h4>Posted by {post.frontmatter.author} on {post.frontmatter.date}</h4>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </section>
    </Layout>
  )
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        author
        date
      }
    }
  }
`