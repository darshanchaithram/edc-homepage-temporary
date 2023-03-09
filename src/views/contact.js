import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Footer from '../components/footer'
import Header from '../components/header.js'
import './contact.css'

const Contact = (props) => {
  return (
    <div className="contact-container">
      <Helmet>
        <title>Contact - IEDC NSSCE</title>
        <meta property="og:title" content="Contact - IEDC NSSCE" />
      </Helmet>
      <div className="contact-navbar">
       
      <Header />



      </div>
      <div className="contact-hero">
        <div className="contact-container3">
          <img
            alt="image"
            src="/playground_assets/edc%20loader-1500h.gif"
            className="contact-image1"
          />
          <span className="contact-text16">
            <span>
              To register a startup, send an email to us at edc.nssce.ac.in or
              call at +91 9061974471. Subject should be mentioned as
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span>Startup Incubation Request</span>
            <br></br>
            <br></br>
            <span className="contact-text22">
              For any other queries, email or call us at any of the above contact
              points.
            </span>
            <br></br>
          </span>
        </div>
      </div>
      <Footer rootClassName="footer-root-class-name9"></Footer>
    </div>
  )
}

export default Contact
