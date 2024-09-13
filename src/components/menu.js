import '../styles/menu.module.scss'
import { menu, logo, navlogo, nav, navMenu, resumeButton } from '../styles/menu.module.scss'
import React from 'react'
import { Link } from 'gatsby';
// import { StaticImage } from "gatsby-plugin-image"
import { ReactComponent as Navlogo} from '../images/discord.svg'

const Menu = () => {
  return (
    <header className={menu}>
      <div className={logo}>
        <Link to='/'>
          {/* <StaticImage
          src="../images/dise-logo.svg"
          width={50}
          quality={95}
          // formats={["auto", "webp", "avif"]}
          alt="Logo"
          // style={{ marginBottom: `1.45rem` }}
          /> */}
          <img src='https://i.imgur.com/rB5TRvL.png' alt="Dise Design" className={navlogo} />
          {/* <Navlogo className={navlogo} style={{ fill: "#fff", marginLeft: '2vh' }} /> */}
        </Link>
     </div>

     <nav className={nav}>
        <ul className={navMenu}>
          <li><Link to='/'><img src="https://i.imgur.com/rB5TRvL.png" alt="" style={{ maxWidth: 30 }} /></Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/portfolio'>Work</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
          {/* <li><Link to='/blog'>Blog</Link></li> */}
       </ul>
        <div><a href="https://drive.google.com/file/d/1ZoIqpQguE7fdTTYHw6pATp64CWcypHmF/view" target="_blank" rel="noreferrer" className={resumeButton}>Resume</a></div>
     </nav>

      
    </header>
  )
}

export default Menu
