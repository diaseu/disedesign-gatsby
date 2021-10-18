import * as React from "react"
import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"

// import Header from "./header"
import "../styles/index.scss"
import "../styles/style.scss"
import Menu from "./menu"
import Socialmedia from "./socialmedia"

const Layout = ({ children }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  return (
    <>
      {/* <Header siteTitle={data.site.siteMetadata?.title || `Title`} /> */}
      {/* <Navbar /> */}
      <Menu />
      <div id="content">
        <main>{children}</main>
        <Socialmedia />
        {/* <footer
          style={{
            marginTop: `2rem`,
          }}
        >
          © {new Date().getFullYear()} Dia Seu
        </footer> */}
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
