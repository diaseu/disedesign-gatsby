import '../styles/menu.scss'
import React from 'react'
import { Link } from 'gatsby';
import { StaticImage } from "gatsby-plugin-image"

const Menu = () => {
  return (
    <header style={{
      background: '#ccc',
      // paddingTop: '2vh',
      display: 'flex',
      justifyContent: 'space-between'
     }}>

     <div className="navLogo">
        <Link to='/'>
          <StaticImage
          src="../images/dise-logo.svg"
          width={50}
          quality={95}
          // formats={["auto", "webp", "avif"]}
          alt="Logo"
          // style={{ marginBottom: `1.45rem` }}
          />
        </Link>
     </div>

     <nav
        style={{
          display: 'flex',
          justifyContent: 'space-evenly',
          paddingTop: '2vh',
          //  maxWidth: '80%',
        }}>
        <ul className="navMenu">
         <li><Link to='/about'>About</Link></li>
         <li><Link to='/portfolio'>Work</Link></li>
         <li><Link to='/contact'>Contact</Link></li>
         <li><Link to='/blog'>Blog</Link></li>
       </ul>
         <div className="resumeButton"><Link to='/resume'>Resume</Link></div>
     </nav>

      
    </header>
  )
}

export default Menu
