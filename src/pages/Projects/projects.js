import React from 'react'

import GitHubIcon from '@material-ui/icons/GitHub'
import LaunchIcon from '@material-ui/icons/Launch'

import './projects.scss'

// todo: move projects cards to a separate file
const projects = [
  {
    title: 'Spotifyist',
    description: 'Leveraging the Spotify Web API, spotifyist allows users to explore their top artists and songs as well as their recently played songs.'
    + 'Users can also create playlists and add songs to their existing playlists.',
    stack: ['React', 'Redux', 'TypeScript', 'SCSS', 'HTML5'],
    projectLink: 'https://spotifyist.netlify.app/'
  },
  {
    title: 'Project 2',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    stack: ['React', 'Redux', 'React-Router', 'TypeScript', ],
    projectLink: 'https://google.com'
  }
]

// todo: move social const to a separate file
const social = {
  github: 'https://github.com/DanielVertlib'
}

const ProjectCard = ({ title, description, stack, projectLink }) => {
  return (
    <div className="project-card">
      <div className="project-card-title">
        <h3>{title}</h3>
      </div>
      <div className="project-card-content">
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
