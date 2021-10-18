import * as React from "react"
import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import '../styles/style.scss'

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <section>
      <h1><small>Hi, I'm</small><br />Dia Seung</h1>
      <h3>I design and build digital products.</h3>
      <p>Full-stack developer with an passion for building better exceptional digital experiences. My daily drive is learning new ways to accomplish this. Currently looking to grow with likeminded people.</p>
      {/* <StaticImage
        src="../images/gatsby-astronaut.png"
        width={300}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt="A Gatsby astronaut"
        style={{ marginBottom: `1.45rem` }}
      /> */}

    </section>
  </Layout>
)

export default IndexPage
