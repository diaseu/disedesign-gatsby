import React, { useState } from "react"
// import { Link } from "gatsby"
// Components
import Layout from "../components/layout"
import Seo from "../components/seo"
// Styles
import { me, skills, toolcontainer, toollist, toolpanel, toolcontent, hidden, active } from '../styles/about.module.scss'
import '../styles/style.scss'

const about = () => {

  const tools = [
    {
      id: "Tech",
      name: "Technology",
      items: ['Javascript (ES6)', 'CSS/SASS', 'GraphQL', 'MongoDB', 'MySQL', 'HTML', 'Typescript'],
    },
    {
      id: "Lib",
      name: "Libraries",
      items: ['jQuery', 'React', 'Vue', 'Node.JS', 'Express', 'Gatsby', 'Passport'],
    },
    {
      id: "Plat",
      name: "Tools",
      items: ['Git', 'Heroku', 'Netlify', 'Wordpress', 'Docker'],
    },
    {
      id: "Des", 
      name: "Design",
      items: ['InDesign', 'InVision', 'Sketch', 'Illustrator'],
    },
  ]

  // function openPane(e) {
  //   e.preventDefault();

  // }

  // const [show, setShow] = useState();


  

  return (
    <Layout>
      <Seo title="About" />
      <section>
        <h2>
          <small>About Me</small>
          <br />
          Who is Dia?
        </h2>
        <div className={me}>
          <img src="https://i.imgur.com/FFqC5NX.jpeg" alt="Dia Seu" />
          <p>
            Hi, my name is Dia (pronounced{" "}
            <a
              href="https://youtu.be/Nv6rM33lKxM?t=4"
              target="_blank"
              rel="noreferrer"
            >
              d EE uh
            </a>
            ). Learning and developing myself as a developer has been an
            exciting journey and I'm looking to grow my roots further as a
            full-stack capable front-end developer. My daily drive is finding
            out and learning new design, tools and skills to elevate my own
            work. Currently looking to grow with likeminded people.
          </p>
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

        {/* <h4>Technology</h4>
        <ul 
          className={skills}
        >
          <li>Javascript (ES6)</li>
          <li>CSS/SASS</li>
          <li>GraphQL</li>
          <li>MongoDB</li>
          <li>(My)SQL</li>
          <li>Express</li>
          <li>HTML</li>
          <li>TypeScript</li>
        </ul>
        <h4>Libraries / Frameworks</h4>
        <ul
          className={skills}
        >
          <li>jQuery</li>
          <li>Node.JS</li>
          <li>Express.JS</li>
          <li>React</li>
          <li>Gatsby</li>
          <li>Passport</li>
          <li>Sequelize</li>
        </ul>
        <h4>Tools / Platforms</h4>
        <ul
          className={skills}
        >
          <li>Git</li>
          <li>Heroku</li>
          <li>Netlify</li>
          <li>Wordpress</li>
        </ul>
        <h4>Design</h4>
        <ul
          className={skills}
        >
          <li>InDesign</li>
          <li>InVision</li>
          <li>Sketch</li>
          <li>Illustrator</li>
        </ul> */}
      </section>
    </Layout>
  )
}

export default about
