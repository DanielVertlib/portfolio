import React from 'react'

import './skills.scss'

// todo: move skills const to a separate file
const skills = [
  'React',
  'JavaScript',
  'TypeScript',
  'HTML5',
  'SCSS',
  'Redux',
  'React-Router',
  'Formik',
  'Openlayers',
  'Jest',
  'Enzyme',
  'React Testing Library',
  'Karma',
  'Mocha',
  'Chai',
  'Sinon',
  'PhantomJS',
  'Webpack',
  'Babel',
  'npm',
  'Gulp',
  'Node.js',
  'Material-UI',
  'CI/CD',
  'Git'
]

const Skills = () => {
  return (
    <div className="skills">
      <h2 className="skills-title">Skills</h2>
      <ul className="skills-list">
        {skills.map((item, index) =>
          <li className="skills-item" key={index}>
            {item}
          </li>)
        }
      </ul>
    </div>
  )
}

export default Skills
