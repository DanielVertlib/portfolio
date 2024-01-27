import React from 'react'

import GitHubIcon from '@material-ui/icons/GitHub'
import LaunchIcon from '@material-ui/icons/Launch'

import constants from 'constants'

import './projects.scss'

const ProjectCard = ({ title, description, stack, github, app, img }) => {
  return (
    <div className="project-card">
      <div className="project-card-img">
        <img src={img} alt="spotifyist" />
      </div>
      <div className="project-card-content">
        <div className="project-card-title">
          <h3>{title}</h3>
          <div className="project-card-links">
            <a
              href={github}
              aria-label='github'
              className='link link-icon'
              target="_blank"
              rel="noreferrer" >
              <GitHubIcon />
            </a>
            <a
              href={app}
              aria-label='launch'
              className='link link-icon'
              target="_blank"
              rel="noreferrer" >
              <LaunchIcon />
            </a>
          </div>
        </div>
        <div className="project-card-description">
          <p>{description}</p>
        </div>
          <ul className="project-card-tech">
            {stack.map((item, index) =>
              <li className="project-tech-item" key={index}>
                {item}
              </li>)
            }
          </ul>
      </div>
    </div>
  )
}

const Projects = () => {
  return (
    <div className="projects">
      <h2 className="projects-title">Projects</h2>
      <div className="projects-grid">
        {constants.projects.map((project, index) => <ProjectCard key={index} {...project} />)}
      </div>
    </div>
  )
}

export default Projects
