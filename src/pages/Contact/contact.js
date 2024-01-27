import React from "react"

import './contact.scss'

const Contact = () => {
  return (
    <div className="contact">
      <h2 className="contact-title">Contact</h2>
      <div className="contact-button">
        <a href="mailto:danielvertlib@hotmail.ca" className="contact-button-content">
          Email Me
        </a>
      </div>
    </div>
  )
}

export default Contact
