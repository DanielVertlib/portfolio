import React from "react"

import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import pdf from '../../assets/resume.pdf'

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
        I have 5+ years of professional work experience building SaaS CMS platforms.
        I am currently working on personal projects to further my skills and knowledge.
      </span>
      <span className="about-content-text">
        I am a Frontend Developer with a passion for creating beautiful, responsive, and functional web applications.
        I love learning new tech and best practices while employing it in my work
      </span>
      <span className="about-content-text">
        Check out some of my projects below!
      </span>
      <div className="about-contact">
        <a href={pdf} target="_blank" rel="noreferrer" className="resume-button">
          <span type="button" className="resume-button-text">
            Resume
          </span>
        </a>
        <a
          href={social.github}
          aria-label='github'
          className='link link-icon' >
          <GitHubIcon fontSize="large" />
        </a>
        <a
          href={social.linkedIn}
          aria-label='linkedIn'
          className='link link-icon' >
          <LinkedInIcon fontSize="large" />
        </a>
      </div>
    </div>
  )
}

export default About