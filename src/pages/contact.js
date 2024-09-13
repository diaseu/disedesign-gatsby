import React, { useState, useEffect, useRef } from "react"
import { Link } from "gatsby"
// Components
import { Icon } from "antd"
import Layout from "../components/layout"
import Seo from "../components/seo"
// Styles
import { contact, contactinfo, icon } from "../styles/contact.module.scss"
import "../styles/style.scss"
// Images
import { ReactComponent as iconlocation } from "../images/discord.svg"
import { ReactComponent as iconphone } from "../images/envelope.svg"
import { ReactComponent as icondiscord } from "../images/discord.svg"
import { ReactComponent as icongithub } from "../images/GitHub.svg"
import { ReactComponent as iconlinkedin } from "../images/LinkedIn.svg"
import { ReactComponent as iconinstagram } from "../images/Instagram.svg"
import { ReactComponent as Iconemail } from "../images/envelope.svg"
import { ReactComponent as iconmarker } from "../images/envelope.svg"

const Contact = () => {
  const meinfo = [
    {
      Name: "Location",
      Info: "Anaheim, CA",
      Link: "https://goo.gl/maps/SfP2Dj5AedhH5B7u6",
      Icon: "<IconEmail className='icon' />",
    },
    {
      Name: "Phone",
      Info: "+1) 619 - 663 - 5879",
      Link: "tel:6196635879",
      Icon: "<IconPhone className='icon' />",
    },
    {
      Name: "Email",
      Info: "hello@dianaseung.com",
      Link: "mailto: hello@dianaseung.com",
      Icon: "<IconEmail className='icon' />",
    },
    {
      Name: "Github",
      Info: "github.com/diaseu",
      Link: "https://www.github.com/diaseu",
      Icon: "<IconGithub className='icon' />",
    },
    {
      Name: "Linkedin",
      Info: "linkedin.com/in/diaseu",
      Link: "https://www.linkedin.com/in/diaseu",
      Icon: "<IconLinkedin className='icon' />",
    }
  ]

  // const DiscordIcon = props => <Icon component={PandaSvg} {...props} />;

  return (
    <Layout>
      <Seo title="Contact" />
      <section>
        <h1>
          <small>Hello</small>
          <br />
          Reach Me at
        </h1>
        <p>
          
        </p>
        <ul className={contact}>
          {meinfo.map(info => (
            <li>
              <span>
                {info.Name}
              </span>
              <a href={info.Link}>{info.Info}</a>
            </li>
          ))}

          {/* <li><span><IconMarker title="Location" className="icon" />{meinfo}</span>
            </li>
          <li><IconPhone title="Call" className="icon" /> {meinfo.phone}</li>
          <li><IconEmail title="Email" className="icon" /> {meinfo.email}</li>
          <li><IconGithub title="Github" className="icon" /> <a href={meinfo.github}>{meinfo.github}</a></li>
          <li><IconLinkedin title="Linkedin" className="icon" /> <a href={meinfo.linkedin}>{meinfo.linkedin}</a></li>
          <li><IconDiscord title="Dicord" className="icon" /> <a href={meinfo.discord}>{meinfo.discord}</a></li> */}
        </ul>
      </section>
    </Layout>
  )
}

export default Contact
