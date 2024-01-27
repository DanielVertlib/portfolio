import React from 'react'

import GitHubIcon from '@material-ui/icons/GitHub'
import LaunchIcon from '@material-ui/icons/Launch'

import spotifyist from 'assets/spotifyist.png'
import portfolio from 'assets/portfolio.png'

// import constants from '../../constants'
import './projects.scss'

const constants = {
  links: {
    github: 'https://github.com/DanielVertlib',
    linkedIn: 'https://www.linkedin.com/in/daniel-vertlib-87962a111/'
  },
  projects: [
    {
      title: 'Spotifyist',
      description: 'Spotifyist allows users to explore their top artists and songs as well as their recently played songs.'
      + ' Leveraging the Spotify Web API, users can also create spotify playlists from the user specific top charts.',
      stack: ['React', 'Redux', 'TypeScript', 'SCSS', 'HTML5'],
      github: 'https://github.com/DanielVertlib/spotify-history',
      app: 'https://spotifyist.netlify.app/',
      img: spotifyist
    },
    {
      title: 'Portfolio',
      description: 'Portfolio Site built with React and SCSS.',
      stack: ['React', 'SCSS', 'Javascript', 'HTML5', 'Material-UI'],
      github: 'https://github.com/DanielVertlib/portfolio',
      app: 'https://danielvertlib.github.io/portfolio/',
      img: portfolio
    }
  ]
}

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
              className='link link-icon' >
              <GitHubIcon />
            </a>
            <a
              href={app}
              aria-label='launch'
              className='link link-icon' >
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
