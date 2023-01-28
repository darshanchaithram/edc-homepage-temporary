import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import GalleryCard3 from '../components/gallery-card3'
import Footer from '../components/footer'
import './events.css'

const Events = (props) => {
  return (
    <div className="events-container">
      <Helmet>
        <title>Events - IEDC NSSCE</title>
        <meta property="og:title" content="Events - IEDC NSSCE" />
      </Helmet>
      <div className="events-navbar">
        <header
          data-role="Header"
          className="events-header max-width-container"
        >
          <div className="events-navbar1">
            <div className="events-container1"></div>
            <div className="events-middle">
              <div className="events-left">
                <Link to="/" className="events-text navbar-link">
                  ABOUT
                </Link>
                <Link to="/startups" className="events-text01 navbar-link">
                  STARTUPS
                </Link>
                <Link to="/our-team" className="events-text02 navbar-link">
                  OUR TEAM
                </Link>
              </div>
              <Link to="/" className="events-navlink">
                <img
                  alt="image"
                  src="/playground_assets/edc%20logo%5B2%5D-200h.png"
                  className="events-image navbar-logo-title"
                />
              </Link>
              <div className="events-right">
                <Link to="/events" className="events-text03 navbar-link">
                  EVENTS
                </Link>
                <Link to="/subscription" className="events-text04 navbar-link">
                  SUBSCRIBE
                </Link>
                <Link to="/contact" className="events-text05 navbar-link">
                  CONTACT
                </Link>
              </div>
            </div>
            <div className="events-icons"></div>
          </div>
          <div data-role="BurgerMenu" className="events-burger-menu">
            <svg viewBox="0 0 1024 1024" className="events-icon">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-role="MobileMenu" className="events-mobile-menu">
            <div className="events-nav">
              <div className="events-container2">
                <Link to="/" className="events-logo-center">
                  <span>iEDC NSSCE</span>
                  <br></br>
                </Link>
                <div
                  data-role="CloseMobileMenu"
                  className="events-close-mobile-menu"
                >
                  <Link to="/" className="events-navlink1">
                    <svg viewBox="0 0 1024 1024" className="events-icon02">
                      <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                    </svg>
                  </Link>
                </div>
              </div>
              <div className="events-middle1">
                <Link to="/" className="events-text08">
                  ABOUT
                </Link>
                <Link to="/startups" className="events-text09">
                  STARTUPS
                </Link>
                <Link to="/our-team" className="events-text10">
                  <span>OUR TEAM</span>
                  <br></br>
                </Link>
                <Link to="/events" className="events-text13">
                  EVENTS
                </Link>
                <Link to="/" className="events-text14">
                  SUBSCRIBE
                </Link>
                <Link to="/contact" className="events-text15">
                  CONTACT
                </Link>
              </div>
              <div className="events-social-bar">
                <a
                  href="https://www.linkedin.com/company/edc-nssce"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="events-link"
                >
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="events-icon04"
                  >
                    <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                  </svg>
                </a>
                <a
                  href="https://instagram.com/iedcnssce"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="events-link1"
                >
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="events-icon06"
                  >
                    <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com/edc.nssce/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="events-link2"
                >
                  <svg
                    viewBox="0 0 602.2582857142856 1024"
                    className="events-icon08"
                  >
                    <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                  </svg>
                </a>
                <a
                  href="https://www.youtube.com/@iedcnssce5376"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="events-link3"
                >
                  <svg viewBox="0 0 1024 1024" className="events-icon10">
                    <path d="M1013.8 307.2c0 0-10-70.6-40.8-101.6-39-40.8-82.6-41-102.6-43.4-143.2-10.4-358.2-10.4-358.2-10.4h-0.4c0 0-215 0-358.2 10.4-20 2.4-63.6 2.6-102.6 43.4-30.8 31-40.6 101.6-40.6 101.6s-10.2 82.8-10.2 165.8v77.6c0 82.8 10.2 165.8 10.2 165.8s10 70.6 40.6 101.6c39 40.8 90.2 39.4 113 43.8 82 7.8 348.2 10.2 348.2 10.2s215.2-0.4 358.4-10.6c20-2.4 63.6-2.6 102.6-43.4 30.8-31 40.8-101.6 40.8-101.6s10.2-82.8 10.2-165.8v-77.6c-0.2-82.8-10.4-165.8-10.4-165.8zM406.2 644.8v-287.8l276.6 144.4-276.6 143.4z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </header>
      </div>
      <div className="events-hero">
        <div className="events-container3">
          <h1 className="events-text16">
            <span>Activities</span>
            <br></br>
          </h1>
        </div>
      </div>
      <div id="Events" className="events-activities">
        <h1 className="events-text19">
          <span>Upcoming/Ongoing events</span>
          <br></br>
        </h1>
        <span className="events-text22">---</span>
        <div className="events-container4">
          <GalleryCard3
            title="Hiring Interns!"
            subtitle="visit bit.ly/internship-edcnssce"
            image_src="/playground_assets/Intern1.jpeg"
            rootClassName="rootClassName23"
          ></GalleryCard3>
          <GalleryCard3
            title="Hiring Interns!"
            subtitle="visit bit.ly/internship-edcnssce"
            image_src="/playground_assets/Intern2.jpeg"
            rootClassName="rootClassName23"
          ></GalleryCard3>
          <GalleryCard3
            title="Hiring Interns!"
            subtitle="visit bit.ly/internship-edcnssce"
            image_src="/playground_assets/Intern3.jpeg"
            rootClassName="rootClassName23"
          ></GalleryCard3>
          <GalleryCard3
            title="Hiring Interns!"
            subtitle="visit bit.ly/internship-edcnssce"
            image_src="/playground_assets/Intern4.jpeg"
            rootClassName="rootClassName23"
          ></GalleryCard3>
          <GalleryCard3
            title="Hiring Interns!"
            subtitle="visit bit.ly/internship-edcnssce"
            image_src="/playground_assets/Intern5.jpeg"
            rootClassName="rootClassName23"
          ></GalleryCard3>
          <GalleryCard3
            title="Hiring Interns!"
            subtitle="visit bit.ly/internship-edcnssce"
            image_src="/playground_assets/Intern6.jpeg"
            rootClassName="rootClassName23"
          ></GalleryCard3>
          <GalleryCard3
            title="Hiring Interns!"
            subtitle="visit bit.ly/internship-edcnssce"
            image_src="/playground_assets/Intern7.jpeg"
            rootClassName="rootClassName23"
          ></GalleryCard3>
        </div>
      </div>
      <div id="Events" className="events-activities1">
        <h1 className="events-text23">
          <span>Latest Activities</span>
          <br></br>
        </h1>
        <span className="events-text26">---</span>
        <div className="events-container5">
          <GalleryCard3
            title="New Year 2023"
            subtitle="Happy New Year to all innovators out there!"
            image_src="/playground_assets/whatsapp%20image%202022-12-31%20at%2011.58.51%20pm-1500h.jpeg"
            rootClassName="rootClassName3"
          ></GalleryCard3>
          <GalleryCard3
            title="Hiring!"
            subtitle="Call for Department Coordinators"
            image_src="/playground_assets/whatsapp%20image%202023-01-01%20at%209.45.33%20pm-1500h.jpeg"
            rootClassName="rootClassName8"
          ></GalleryCard3>
          <GalleryCard3
            title="Hiring!"
            subtitle="Call for content and creative team"
            image_src="/playground_assets/whatsapp%20image%202023-01-01%20at%209.46.10%20pm-1500h.jpeg"
            rootClassName="rootClassName9"
          ></GalleryCard3>
          <GalleryCard3
            title="Ideathon"
            subtitle="Idea pitching event "
            image_src="/playground_assets/whatsapp%20image%202022-12-30%20at%2012.11.11%20pm-1500h.jpeg"
            rootClassName="rootClassName10"
          ></GalleryCard3>
          <GalleryCard3
            title="Tink-Her-Hack"
            subtitle="A 2 day women only hackathon by IEDC NSSCE and TinkerHub on 17-18 Dec 2022"
            image_src="/playground_assets/_mg_0499-1500h.jpg"
            rootClassName="rootClassName24"
          ></GalleryCard3>
          <GalleryCard3
            title="TechHub"
            subtitle="TechHub session: 21st December 2022"
            image_src="/playground_assets/whatsapp%20image%202022-12-20%20at%209.16.59%20pm-1500h.jpeg"
            rootClassName="rootClassName25"
          ></GalleryCard3>
          <GalleryCard3
            title="SDW'22: Learning Stations"
            subtitle="Skill Development Week 22: 20-26 November 2022"
            image_src="/playground_assets/whatsapp%20image%202022-11-19%20at%2012.28.32%20pm-1500h.jpeg"
            rootClassName="rootClassName26"
          ></GalleryCard3>
          <GalleryCard3
            title="SDW'22"
            subtitle="Learning Stations were held at as a pre-event to Skill Development Week 2022"
            image_src="/playground_assets/whatsapp%20image%202022-11-18%20at%207.28.44%20am-1500h.jpeg"
            rootClassName="rootClassName31"
          ></GalleryCard3>
          <GalleryCard3
            title="SDW'22"
            subtitle="25 November 2022"
            image_src="/playground_assets/whatsapp%20image%202022-11-20%20at%2022.02.10-1500h.jpg"
            rootClassName="rootClassName27"
          ></GalleryCard3>
          <GalleryCard3
            title="SDW'22"
            subtitle="23 Nov 2022"
            image_src="/playground_assets/whatsapp%20image%202022-11-20%20at%2023.00.10-1500h.jpg"
            rootClassName="rootClassName28"
          ></GalleryCard3>
          <GalleryCard3
            title="SDW'22"
            subtitle="22 November 2022"
            image_src="/playground_assets/whatsapp%20image%202022-11-20%20at%2022.31.12-1500h.jpg"
            rootClassName="rootClassName29"
          ></GalleryCard3>
          <GalleryCard3
            title="SDW'22"
            subtitle="21 Nov 2022"
            image_src="/playground_assets/whatsapp%20image%202022-11-19%20at%2020.32.19-1500h.jpg"
            rootClassName="rootClassName30"
          ></GalleryCard3>
        </div>
      </div>
      <Footer rootClassName="footer-root-class-name"></Footer>
    </div>
  )
}

export default Events
