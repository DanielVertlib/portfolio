import React from "react"

import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'

import './about.scss'

// todo: move social const to a separate file
const social = {
  github: 'https://github.com/DanielVertlib',
  linkedIn: 'https://www.linkedin.com/in/daniel-vertlib-0b1b1a1b0/'
}

const About = () => {
  return (
    <div className="about">
      <h1 className="about-intro-text">Hello, I am
        <span className="about-name-text"> Daniel Vertlib.</span>
      </h1>
      <h2 className="about-role-text">A Frontend Developer.</h2>
      <span className="about-content-text">
        I am a Frontend Developer with a passion for creating beautiful, responsive, and functional web applications.
      </span>
      <div className="about-contact">
        <a
          href={social.github}
          aria-label='github'
          className='link link-icon' >
          <GitHubIcon />
        </a>
        <a
          href={social.linkedIn}
          aria-label='linkedIn'
          className='link link-icon' >
          <LinkedInIcon />
        </a>
      </div>
    </div>
  )
}

export default About
