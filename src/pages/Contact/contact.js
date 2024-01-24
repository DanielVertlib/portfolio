import React from "react"

import './contact.scss'

const ContactButton = () => {
  return (
    <div className="contact-button">
      <a href="mailto:danielvertlib@hotmail.ca" className="contact-button-content">
        Email Me
      </a>
    </div>
  )
}

const Contact = () => {
  return (
    <div className="contact">
      <h2 className="contact-title">Contact</h2>
      <ContactButton />
    </div>
  )
}

export default Contact
