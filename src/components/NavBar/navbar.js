import React from "react"

import { Link } from 'react-scroll'

import './navbar.scss'

const NavBar = () => {

  const linkProps = {
    className: "navbar-menu-item",
    smooth: true,
    duration: 500
  }

  return (
    <div className="navbar">
      {/* <img src={logo} alt="Logo" className="logo" /> */}
      <div className="navbar-menu">
        <Link {...linkProps} to="skills">skills</Link>
        <Link {...linkProps} to="projects">projects</Link>
        <Link {...linkProps} to="contact">contact</Link>
      </div>
    </div>
  )
}

export default NavBar
