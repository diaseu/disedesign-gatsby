
import React, { useState } from "react"
import 'antd/dist/antd.css'
// import { Link } from "gatsby"
// Components
import Layout from "../components/layout"
import Seo from "../components/seo"
// Styles
import { skills, toolcontainer, toollist, toolcontent, hidden } from '../styles/about.module.scss'
import '../styles/style.scss'
import { Row, Col, Card } from 'antd';
import ModalComponent from '../components/ModalComponent'


const Portfolio = () => {

  const projects = [
    {
      id: 0,
      name: "Dise Design v1",
      blurb: "Personal Portfolio Site v1 for Dia Seung",
      description: "Dise Design v1 was my version of my personal portfolio site that showcased recent projects I've worked on, as well as info about me. This site was an exploration of the Ant Design styling library, which was a break away from Material UI. ",
      url: "https://www.disedesign.com",
      git: "https://github.com/diaseu/disedesign-netlify",
      img: "https://i.imgur.com/xwtIYfG.png",
      technology: ["Javascript", "React.JS", "Node.JS", "Ant Design"]
    },
    {
      id: 1,
      name: "Zap: Bug Tracker",
      blurb: "Social bug tracking app, with the ability to crowd-source solutions to issues and questions",
      description: "Not everything needs to be a revolutionary new idea. Sometimes we just want to take something that already exists and simply make it better.  We wanted to make a bug tracking app that innovates on currently existing forms such as Trello or Jira, and give it a social media flavor.  Zap App gives users the ability to create projects and organize tasks, bugs and issues, and then reach out to the community to crowdfund solutions and answers.",
      url: "https://zapbugtracker.herokuapp.com/",
      git: "https://github.com/diaseu/project3",
      img: "https://i.imgur.com/nJf59GQ.png",
      technology: ["Javascript", "MongoDB", "Express", "React.JS", "Node.JS", "Material-UI"]
    },
    {
      id: 2,
      name: "Study Blog",
      blurb: "Social blog app where users can post, comment and vote on student-created content",
      description: "Study Blog is a student-centered forum website for students to share notes, curated and promoted through voting. Users are able to create rich-text posts chasing any notes and articles related to a specific topic, which are sorted into topic categories. Users can register by creating a username and a password and entering their email address. All passwords are encrypted using passport and jsonwebtoken modules. Users can upvote/downvote or comment on other users' posts. All the user, post, and comment data is saved in an SQL database using the JAWSDB add-on on Heroku. This application allows users to post study material for the following topics:  HTML, Javascript, Node.JS, SQL",
      url: "https://studyblog.herokuapp.com/",
      git: "https://github.com/diaseu/studyBlog",
      img: "https://i.imgur.com/43rACDv.png",
      technology: ["Javascript", "MySQL2", "Express", "React.JS", "Node.JS", "Passport", "JSON Web Token", "Sequelize"]
    },
    {
      id: 3,
      name: "Beleaf Co.",
      blurb: "Online boutique shop specializing in rare tropical plants",
      description: "Beleaf Co. is a online boutique shop specializing in sales of rare tropical plants and various related accessories. This started as a personal passion in collecting rare tropical houseplants, which eventually led to sharing the plant love with the local community. COMING SOON ",
      url: "https://www.beleafco.me",
      git: "https://github.com/diaseu?tab=repositories",
      img: "https://i.imgur.com/nJf59GQ.png",
      technology: ["Javascript", "MongoDB", "Express", "React.JS", "Node.JS", "Commerce.JS", "Material-UI"]
    },
    {
      id: 4,
      name: "Dise Design v2",
      blurb: "Personal Portfolio Site v2 for Dia Seung",
      description: "Dise Design v2 was a redesign of my personal portfolio site. As I worked on the first version, I realized I wasn't too thrilled with that implementation I wanted to explore using new technology, especially Gatsby and SASS, to improve my skills.  showcasing recent projects I've worked on, as well as info about me including how to reach me.",
      url: "https://www.disedesign.com",
      git: "https://github.com/diaseu/disedesign-netlify",
      img: "https://i.imgur.com/ClXP6wG.png",
      technology: ["Javascript", "React.JS", "Node.JS", "Ant Design"]
    },
  ]

  // function openPane(e) {
  //   e.preventDefault();

  // }

  // const [show, setShow] = useState();




  return (
    <Layout>
      <Seo title="Portfolio" />
      <section>
        <h2><small>See My</small><br />Projects</h2>
        <Row>
          {projects.map((project) => (
            <Col xs={24} sm={12} md={12} lg={8} xl={8} xxl={6}>
              <Card
                hoverable
                className="dark"
                style={{ width: '100%' }}
              >
                <ModalComponent
                  project={project}
                />
              </Card>
            </Col>
        ))}
        </Row>

      </section>
    </Layout>
  )
}

export default Portfolio
