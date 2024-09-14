import React, { useState } from "react"
// import { Link } from "gatsby"
// Components
import Layout from "../components/layout"
import Seo from "../components/seo"
import Grid from "../components/Grid"
// Styles
import {
  me,
  skills,
  toolcontainer,
  toollist,
  toolpanel,
  toolcontent,
  hidden,
  active,
} from "../styles/about.module.scss"
import "../styles/style.scss"

const about = () => {
  const tools = [
    {
      id: "Tech",
      name: "Technical Skills",
      items: [
        "Bash",
        "Java",
        "JavaScript",
        "SASS",
        "MySQL",
        "MongoDB",
        "jQuery",
        "React",
        "Vue",
        "Docker",
        "Git",
        "Heroku",
        "Netlify",
        "Jenkins",
      ],
    },
    {
      id: "Lib",
      name: "Soft Skills",
      items: [],
    },
    {
      id: "Plat",
      name: "Hobbies",
      items: [
        "Custom Keyboards",
        "Coffee",
        "Hydroponic Gardening",
        "Woodworking",
        "DIY Home Projects",
        "3D Printing",
      ],
    },
  ]

  return (
    <Layout>
      <Seo title="About" />
      <section>
        <Grid columns={4} style={{ gridColumnGap: "32px", marginBottom: 100 }}>
          <h2>
            <small>Hello</small>
            <br />
            I'm Dia
          </h2>
          <div className={me}>
            <img src="https://i.imgur.com/FFqC5NX.jpeg" alt="Dia Seu" />
            <div>
              I'm a Customer Support Engineer at Liferay, Inc, helping
              enterprise customers with troubleshooting complex software issues.
              Seeking to leverage strong problem-solving, critical thinking and
              analytical skills to transition into a Full-Stack Software
              Engineer role, where I can contribute to the develoipment and
              improvement of innovative software solutions.
            </div>
          </div>

          <div className={toolcontainer}>
            {/* Technology */}
            {tools.map(tool => (
              <div className={toolpanel}>
                <button id="list-tech">
                  <span>{tool.name}</span>
                </button>
                <div id="pane-tech">
                  <ul className={skills}>
                    {tool.items.map(item => (
                      <li>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </Grid>
      </section>
    </Layout>
  )
}

export default about
