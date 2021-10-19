import React, { useState, useEffect, useRef } from "react"
import { Link } from "gatsby"
// Components
import { Icon } from 'antd'
import Layout from "../components/layout"
import Seo from "../components/seo"
// Styles
import { contact, contactinfo, icon } from '../styles/contact.module.scss'
import '../styles/style.scss'
// Images
import { ReactComponent as iconlocation } from '../images/discord.svg'
import { ReactComponent as iconphone } from '../images/envelope.svg'
import { ReactComponent as icondiscord } from '../images/discord.svg'
import { ReactComponent as icongithub } from '../images/GitHub.svg'
import { ReactComponent as iconlinkedin } from '../images/LinkedIn.svg'
import { ReactComponent as iconinstagram } from '../images/Instagram.svg'
import { ReactComponent as Iconemail } from '../images/envelope.svg'
import { ReactComponent as iconmarker } from '../images/envelope.svg'


const Contact = () => {

  const meinfo = [
    {
      Name: "Location",
      Info: "Anaheim, CA",
      Link: "https://goo.gl/maps/SfP2Dj5AedhH5B7u6",
      Icon: "<IconEmail className='icon' />"
    },
    {
      Name: "Phone",
      Info: "+1) 619 - 663 - 5879",
      Link: "tel:6196635879",
      Icon: "<IconPhone className='icon' />"
    },
    {
      Name: "Email",
      Info: "hello@disedesign.com",
      Link: "mailto: hello@disedesign.com?Subject=Dise Design",
      Icon: "<IconEmail className='icon' />"
    },
    {
      Name: "Github",
      Info: "github.com/diaseu",
      Link: "https://www.github.com/diaseu",
      Icon: "<IconGithub className='icon' />"
    },
    {
      Name: "Linkedin",
      Info: "linkedin.com/in/diaseu",
      Link: "https://www.linkedin.com/in/diaseu",
      Icon: "<IconLinkedin className='icon' />"
    },
    {
      Name: "Discord",
      Info: "Discord",
      Link: "https://discord.gg/g93F48jcjP",
      Icon: "<IconDiscord className='icon' />"
    }
  ]
    
  // const DiscordIcon = props => <Icon component={PandaSvg} {...props} />;

  return(
    <Layout>
      <Seo title="Contact" />
      <section>
        <h1><small>Reach Out</small><br />Contact Me</h1>
        <h3>Let's make magic</h3>
        <p>Full-stack developer with an passion for building better exceptional digital experiences. My daily drive is learning new ways to accomplish this. Currently looking to grow with likeminded people.</p>
        <ul className={contact}>
          {meinfo.map(info => (
            <li>
              <span>
                {/* <Icon component={info.Icon} /> */}
                {/* <div dangerouslySetInnerHTML={{ __html: info.Icon }} /> */}
                <Iconemail className='icon' />
                {/* <IconDiscord title={info.Name} style={{ marginRight: "20px" }} /> */}
                <a href={info.Link}>{info.Info}</a>
              </span>
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