import React from 'react'
// import { Link } from 'gatsby';
// import navlogoURL, { ReactComponent as Navlogo } from '../images/ds-logo.svg'

// Styles
// import '../styles/style.scss'
import { socialmedia, mailcrypt } from '../styles/socialmedia.module.scss'
// Images
import { ReactComponent as IconDiscord } from '../images/discord.svg'
import { ReactComponent as IconGithub } from '../images/GitHub.svg'
import { ReactComponent as IconLinkedin } from '../images/LinkedIn.svg'
import { ReactComponent as IconInstagram } from '../images/Instagram.svg'
import { ReactComponent as IconEnvelope } from '../images/envelope.svg'

const Menu = () => {
  


  return (
    <div orientation="left" className={socialmedia}>
      <ul>

        {/* Email */}
        <li>
          <a href="mailto:dianahseung@gmail.com?subject=Dise Design"
            target="_blank" rel="noreferrer">
            <IconEnvelope />
          </a>
        </li>

        {/* Github */}
        <li>
          <a href="https://github.com/diaseu" aria-label="GitHub" target="_blank" rel="noreferrer">
            <IconGithub />
          </a>
        </li>

        {/* LinkedIn */}
        <li>
          <a href="https://www.linkedin.com/in/diaseu" aria-label="Linkedin" target="_blank" rel="noreferrer">
            <IconLinkedin />
          </a>
        </li>

        {/* Instagram */}
        <li>
          <a href="https://www.instagram.com/theslowpokie" aria-label="Instagram" target="_blank" rel="noreferrer">
            <IconInstagram />
          </a>
        </li>

        {/* Discord */}
        <li>
          <a href="https://discord.gg/rfB2UJ3M" aria-label="Twitter" target="_blank" rel="noreferrer">
            <IconDiscord/>
          </a>
        </li>


      </ul>
    </div>
  )
}

export default Menu