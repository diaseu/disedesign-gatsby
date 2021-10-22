import React, { useState } from "react"
// import { Link } from "gatsby"
// Components
import Layout from "../components/layout"
import Seo from "../components/seo"
// Styles
import { skills, toolcontainer, toollist, toolcontent, hidden, active } from '../styles/about.module.scss'
import '../styles/style.scss'

const about = () => {

  const tools = [
    {
      id: "Tech",
      name: "Technology",
      items: ['Javascript (ES6)', 'CSS/SASS', 'GraphQL', 'MongoDB', '(My)SQL', 'HTML', 'Typescript'],
    },
    {
      id: "Lib",
      name: "Libraries / Frameworks",
      items: ['jQuery', 'React', 'Node.JS', 'Express.js', 'Gatsby', 'Passport', 'Sequelize'],
    },
    {
      id: "Plat",
      name: "Tools / Platform",
      items: ['Git', 'Heroku', 'Netlify', 'Wordpress'],
    },
    {
      id: "Des", 
      name: "Design",
      items: ['InDesign', 'InVision', 'Sketch', 'Illustrator'],
    },
    {
      id: "all",
      name: "All",
      items: ['Javascript (ES6)', 'CSS/SASS', 'GraphQL', 'MongoDB', '(My)SQL', 'HTML', 'Typescript', 'jQuery', 'React', 'Node.JS', 'Express.js', 'Gatsby', 'Passport', 'Sequelize', 'Git', 'Heroku', 'Netlify', 'Wordpress', 'InDesign', 'InVision', 'Sketch', 'Illustrator'],
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
        <h2><small>About Me</small><br />Who is Dia?</h2>
        <p>Hi, my name is Dia (short for Diana, but pronounced <a href="https://youtu.be/Nv6rM33lKxM?t=4" target="_blank" rel="noreferrer">d EE uh</a>). My designing and building awesome digital experiences new web apps. </p>
        <p>A pandemic-induced revelation led me to a certified full-stack web development program at UC Irvine. Learning and developing myself as a developer has been an exciting journey and I'm looking to grow my roots further as a full-stack capable front-end developer. </p>My daily drive is finding out and learning new design, tools and skills to elevate my own work. Currently looking to grow with likeminded people.</p>

        <div className={toolcontainer}>
          <div className={toollist}>
            <button
              id="list-tech"
              className={active}
            // onclick={() => setShow(true)}
            >
              <span>{tools[0].name}</span></button>
            <button
              id="list-lib"
            // onclick={() => setShow(true)}
            >
              <span>{tools[1].name}</span></button>
            <button
              id="list-plat"
            // onclick={() => setShow(true)}
            >
              <span>{tools[2].name}</span></button>
            <button
              id="list-des"
            // onclick={() => setShow(true)}
            >
              <span>{tools[3].name}</span></button>
            <button
              id="list-all"
            // onclick={() => setShow(true)}
            >
              <span>See All</span></button>

            {/* {tools.map(tool => (
              <button 
                id={`list-${tool.id}`} 
                // onclick={() => setShow(true)}
              >
                  <span>{tool.name}</span></button>
            ))} */}
            {/* {tlist.map(tool => (
              <button id={`list-${tool.id}`}><span>{tool} + 1</span></button>
            ))} */}
          </div>
          <div className={toolcontent}>
          {/* {tools.map(tool => (
            <div id={`pane-${tool.id}`}
            //  className={hidden}
             >
              <ul className={skills}>
                {tool.items.map((item) => (
                  <li>{item}</li>
                  ))}
              </ul>
            </div>
          ))} */}
            <div id="pane-tech"
            //  className={hidden}
            >
              <ul className={skills}>
                {tools[0].items.map((item) => (
                  <li>{item}</li>
                ))}
              </ul>
            </div>

            <div id="pane-lib"
             className={hidden}
            >
              <ul className={skills}>
                {tools[1].items.map((item) => (
                  <li>{item}</li>
                ))}
              </ul>
            </div>
            <div id="pane-plat"
             className={hidden}
            >
              <ul className={skills}>
                {tools[2].items.map((item) => (
                  <li>{item}</li>
                ))}
              </ul>
            </div>
            <div id="pane-des"
             className={hidden}
            >
              <ul className={skills}>
                {tools[3].items.map((item) => (
                  <li>{item}</li>
                ))}
              </ul>
            </div>
            <div id="pane-all"
             className={hidden}
            >
              <ul className={skills}>
                {tools[4].items.map((item) => (
                  <li>{item}</li>
                ))}
              </ul>
            </div>

          </div>
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
