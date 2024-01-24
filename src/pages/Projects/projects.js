import React from 'react'

import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'

import './projects.scss'

// todo: move social const to a separate file
const social = {
  github: 'https://github.com/DanielVertlib'
}

const ProjectCard = ({ title, description, stack, projectLink }) => {
  return (
    <div className="project-card">
      <div className="project-card-header">
        <div className="project-card-title">
          <h3>{title}</h3>
        </div>
        <div className="project-card-content">
          <p>{description}</p>
        </div>
        <div className="project-card-tech">
          <ul>
            {stack.map((item, index) =>
              <li className="project-tech-item" key={index}>
                {item}
              </li>)
            }
          </ul>
        </div>
        <div className="project-card-links">
          <a
            href={social.github}
            aria-label='github'
            className='link link-icon' >
            <GitHubIcon />
          </a>
          <a
            href={projectLink}
            aria-label='github'
            className='link link-icon' >
            <GitHubIcon />
          </a>
        </div>
      </div>
    </div>
  )
}

const Projects = () => {
  return (
    <div className="projects">
      <h2 className="projects-title">Projects</h2>
      <div className="projects-grid">
        <div className="project-card">

        </div>
      </div>
    </div>
  )
}

export default Projects
