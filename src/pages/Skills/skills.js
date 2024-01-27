import React from 'react'

import constants from 'constants'

import './skills.scss'

const Skills = () => {
  return (
    <div className="skills">
      <h2 className="skills-title">Skills</h2>
      <ul className="skills-list">
        {constants.skills.map((item, index) =>
          <li className="skills-item" key={index}>
            {item}
          </li>)
        }
      </ul>
    </div>
  )
}

export default Skills
