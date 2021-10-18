import React, { useState } from "react"
// import { Link } from "gatsby"
// Components
import Layout from "../components/layout"
import Seo from "../components/seo"
// Styles
import { skills, toolcontainer, toollist, toolcontent, hidden } from '../styles/about.module.scss'
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
        <p>Hi, my name is Dia (short for Diana, but pronounced <a href="https://youtu.be/Nv6rM33lKxM?t=4" target="_blank" rel="noreferrer">d EE uh</a>). I get excited designing and building awesome digital experiences through web apps. </p>
        <p>My coding journey started when I was 12, self-studying HTML books to create my own first geocities sites and finding awesome websites to study under the hood and emulate. Discovering cool new tricks that people have utilized for digital experiences really excited me and I'd enjoy trying to reverse engineer how they make it work. After trying to follow my veterinary father's footsteps, I had a revelation during the pandemic that life really is too short to waste time not pursue what truly gets me excited. That led me head-first into a full-stack web development program at UC Irvine.  Now I'm looking to grow my roots as a full-stack capable front-end developer. </p>

        <p>My daily drive is finding out and learning inspiring design, tools and code to elevate my own work. Currently looking to grow with likeminded people.</p>

        <div className={toolcontainer}>
          <div className={toollist}>
            {tools.map(tool => (
              <button 
                id={`list-${tool.id}`} 
                // onclick={() => setShow(true)}
              >
                  <span>{tool.name}</span></button>
            ))}
            {/* {tlist.map(tool => (
              <button id={`list-${tool.id}`}><span>{tool} + 1</span></button>
            ))} */}
          </div>
          <div className={toolcontent}>
          {tools.map(tool => (
            <div id={`pane-${tool.id}`}
            //  className={hidden}
             >
              <ul className={skills}>
                {tool.items.map((item) => (
                  <li>{item}</li>
                  ))}
              </ul>
            </div>
          ))}
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
