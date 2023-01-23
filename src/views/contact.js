import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Footer from '../components/footer'
import './contact.css'

const Contact = (props) => {
  return (
    <div className="contact-container">
      <Helmet>
        <title>Contact - IEDC NSSCE</title>
        <meta property="og:title" content="Contact - IEDC NSSCE" />
      </Helmet>
      <div className="contact-navbar">
        <header
          data-role="Header"
          className="contact-header max-width-container"
        >
          <div className="contact-navbar1">
            <div className="contact-container1"></div>
            <div className="contact-middle">
              <div className="contact-left">
                <Link to="/" className="contact-text navbar-link">
                  ABOUT
                </Link>
                <Link to="/startups" className="contact-text01 navbar-link">
                  STARTUPS
                </Link>
                <Link to="/our-team" className="contact-text02 navbar-link">
                  OUR TEAM
                </Link>
              </div>
              <Link to="/" className="contact-navlink">
                <img
                  alt="image"
                  src="/playground_assets/edc%20logo%5B2%5D-200h.png"
                  className="contact-image navbar-logo-title"
                />
              </Link>
              <div className="contact-right">
                <Link to="/events" className="contact-text03 navbar-link">
                  EVENTS
                </Link>
                <Link to="/subscription" className="contact-text04 navbar-link">
                  SUBSCRIBE
                </Link>
                <Link to="/contact" className="contact-text05 navbar-link">
                  CONTACT
                </Link>
              </div>
            </div>
            <div className="contact-icons"></div>
          </div>
          <div data-role="BurgerMenu" className="contact-burger-menu">
            <svg viewBox="0 0 1024 1024" className="contact-icon">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-role="MobileMenu" className="contact-mobile-menu">
            <div className="contact-nav">
              <div className="contact-container2">
                <Link to="/" className="contact-logo-center">
                  <span>iEDC NSSCE</span>
                  <br></br>
                </Link>
                <div
                  data-role="CloseMobileMenu"
                  className="contact-close-mobile-menu"
                >
                  <Link to="/" className="contact-navlink1">
                    <svg viewBox="0 0 1024 1024" className="contact-icon02">
                      <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                    </svg>
                  </Link>
                </div>
              </div>
              <div className="contact-middle1">
                <Link to="/" className="contact-text08">
                  ABOUT
                </Link>
                <Link to="/startups" className="contact-text09">
                  STARTUPS
                </Link>
                <Link to="/our-team" className="contact-text10">
                  <span>OUR TEAM</span>
                  <br></br>
                </Link>
                <Link to="/events" className="contact-text13">
                  EVENTS
                </Link>
                <Link to="/" className="contact-text14">
                  SUBSCRIBE
                </Link>
                <Link to="/contact" className="contact-text15">
                  CONTACT
                </Link>
              </div>
              <div className="contact-social-bar">
                <a
                  href="https://www.linkedin.com/company/edc-nssce"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="contact-link"
                >
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="contact-icon04"
                  >
                    <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                  </svg>
                </a>
                <a
                  href="https://instagram.com/iedcnssce"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="contact-link1"
                >
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="contact-icon06"
                  >
                    <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com/edc.nssce/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="contact-link2"
                >
                  <svg
                    viewBox="0 0 602.2582857142856 1024"
                    className="contact-icon08"
                  >
                    <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                  </svg>
                </a>
                <a
                  href="https://www.youtube.com/@iedcnssce5376"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="contact-link3"
                >
                  <svg viewBox="0 0 1024 1024" className="contact-icon10">
                    <path d="M1013.8 307.2c0 0-10-70.6-40.8-101.6-39-40.8-82.6-41-102.6-43.4-143.2-10.4-358.2-10.4-358.2-10.4h-0.4c0 0-215 0-358.2 10.4-20 2.4-63.6 2.6-102.6 43.4-30.8 31-40.6 101.6-40.6 101.6s-10.2 82.8-10.2 165.8v77.6c0 82.8 10.2 165.8 10.2 165.8s10 70.6 40.6 101.6c39 40.8 90.2 39.4 113 43.8 82 7.8 348.2 10.2 348.2 10.2s215.2-0.4 358.4-10.6c20-2.4 63.6-2.6 102.6-43.4 30.8-31 40.8-101.6 40.8-101.6s10.2-82.8 10.2-165.8v-77.6c-0.2-82.8-10.4-165.8-10.4-165.8zM406.2 644.8v-287.8l276.6 144.4-276.6 143.4z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </header>
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
              For any other queries, email or call us at the above contact
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
