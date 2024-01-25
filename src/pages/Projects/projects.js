import React from 'react'

import GitHubIcon from '@material-ui/icons/GitHub'
import LaunchIcon from '@material-ui/icons/Launch'

import spotifyist from '../../assets/spotifyist.png'
import portfolio from '../../assets/portfolio.png'

import './projects.scss'

// todo: move projects cards to a separate file
const projects = [
  {
    title: 'Spotifyist',
    description: 'Spotifyist allows users to explore their top artists and songs as well as their recently played songs.'
    + ' Leveraging the Spotify Web API, users can also create spotify playlists from the user specific top charts.',
    stack: ['React', 'Redux', 'TypeScript', 'SCSS', 'HTML5'],
    projectLink: 'https://spotifyist.netlify.app/',
    img: spotifyist
  },
  {
    title: 'Portfolio Website',
    description: 'Portfolio Site built with React and SCSS.',
    stack: ['React', 'SCSS', 'Javascript', 'HTML5', 'Material-UI'],
    projectLink: 'https://google.com',
    img: portfolio
  }
]

// todo: move social const to a separate file
const social = {
  github: 'https://github.com/DanielVertlib'
}

const ProjectCard = ({ title, description, stack, projectLink, img }) => {
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
              href={social.github}
              aria-label='github'
              className='link link-icon' >
              <GitHubIcon />
            </a>
            <a
              href={projectLink}
              aria-label='launch'
              className='link link-icon' >
              <LaunchIcon />
            </a>
          </div>
        </div>
        <div className="project-card-description">
          <p>{description}</p>
        </div>
        {/* <div className="project-card-tech"> */}
          <ul className="project-card-tech">
            {stack.map((item, index) =>
              <li className="project-tech-item" key={index}>
                {item}
              </li>)
            }
          </ul>
        {/* </div> */}
      </div>
    </div>
  )
}

const Projects = () => {
  return (
    <div className="projects">
      <h2 className="projects-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => <ProjectCard key={index} {...project} />)}
      </div>
    </div>
  )
}

export default Projects
