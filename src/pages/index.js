import * as React from "react"
import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import '../styles/style.scss'

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Grid columns={4} style={{ gridColumnGap: "32px", marginBottom: 100 }}>
      {/* <h1><small>Hi, I'm</small><br />Dia Seung</h1> */}
      <Link to='/about'>
          <img src="https://i.imgur.com/rB5TRvL.png" alt="" className="home-logo" />
        </Link>
    </Grid>
  </Layout>
)

export default IndexPage
