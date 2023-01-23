import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import GalleryCard3 from '../components/gallery-card3'
import Footer from '../components/footer'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>IEDC NSSCE</title>
        <meta property="og:title" content="IEDC NSSCE" />
      </Helmet>
      <div className="home-navbar">
        <header data-role="Header" className="home-header max-width-container">
          <div className="home-navbar1">
            <div className="home-container1"></div>
            <div className="home-middle">
              <div className="home-left">
                <a href="#About" className="home-text navbar-link">
                  ABOUT
                </a>
                <Link to="/startups" className="home-text01 navbar-link">
                  STARTUPS
                </Link>
                <Link to="/our-team" className="home-text02 navbar-link">
                  OUR TEAM
                </Link>
              </div>
              <a href="#Landing" className="home-link">
                <img
                  alt="image"
                  src="/playground_assets/edc%20logo%5B2%5D-200h.png"
                  className="home-image navbar-logo-title"
                />
              </a>
              <div className="home-right">
                <a href="#Events" className="home-text03 navbar-link">
                  EVENTS
                </a>
                <Link to="/subscription" className="home-text04 navbar-link">
                  SUBSCRIBE
                </Link>
                <Link to="/contact" className="home-text05 navbar-link">
                  CONTACT
                </Link>
              </div>
            </div>
            <div className="home-icons"></div>
          </div>
          <div data-role="BurgerMenu" className="home-burger-menu">
            <svg viewBox="0 0 1024 1024" className="home-icon">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-role="MobileMenu" className="home-mobile-menu">
            <div className="home-nav">
              <div className="home-container2">
                <Link to="/" className="home-logo-center">
                  <span>iEDC NSSCE</span>
                  <br></br>
                </Link>
                <div
                  data-role="CloseMobileMenu"
                  className="home-close-mobile-menu"
                >
                  <Link to="/" className="home-navlink">
                    <svg viewBox="0 0 1024 1024" className="home-icon02">
                      <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                    </svg>
                  </Link>
                </div>
              </div>
              <div className="home-middle1">
                <Link to="/" className="home-text08">
                  ABOUT
                </Link>
                <Link to="/startups" className="home-text09">
                  STARTUPS
                </Link>
                <Link to="/our-team" className="home-text10">
                  <span>OUR TEAM</span>
                  <br></br>
                </Link>
                <Link to="/events" className="home-text13">
                  EVENTS
                </Link>
                <Link to="/" className="home-text14">
                  SUBSCRIBE
                </Link>
                <Link to="/contact" className="home-text15">
                  CONTACT
                </Link>
              </div>
              <div className="home-social-bar">
                <a
                  href="https://www.linkedin.com/company/edc-nssce"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link1"
                >
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon04"
                  >
                    <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                  </svg>
                </a>
                <a
                  href="https://instagram.com/iedcnssce"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link2"
                >
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon06"
                  >
                    <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com/edc.nssce/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link3"
                >
                  <svg
                    viewBox="0 0 602.2582857142856 1024"
                    className="home-icon08"
                  >
                    <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                  </svg>
                </a>
                <a
                  href="https://www.youtube.com/@iedcnssce5376"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link4"
                >
                  <svg viewBox="0 0 1024 1024" className="home-icon10">
                    <path d="M1013.8 307.2c0 0-10-70.6-40.8-101.6-39-40.8-82.6-41-102.6-43.4-143.2-10.4-358.2-10.4-358.2-10.4h-0.4c0 0-215 0-358.2 10.4-20 2.4-63.6 2.6-102.6 43.4-30.8 31-40.6 101.6-40.6 101.6s-10.2 82.8-10.2 165.8v77.6c0 82.8 10.2 165.8 10.2 165.8s10 70.6 40.6 101.6c39 40.8 90.2 39.4 113 43.8 82 7.8 348.2 10.2 348.2 10.2s215.2-0.4 358.4-10.6c20-2.4 63.6-2.6 102.6-43.4 30.8-31 40.8-101.6 40.8-101.6s10.2-82.8 10.2-165.8v-77.6c-0.2-82.8-10.4-165.8-10.4-165.8zM406.2 644.8v-287.8l276.6 144.4-276.6 143.4z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </header>
      </div>
      <div className="home-main">
        <div id="Landing" className="home-hero section-container">
          <div className="home-max-width max-width-container">
            <div className="home-hero1">
              <div className="home-container3">
                <div className="home-info">
                  <img
                    alt="Rectangle43271305"
                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMicgaGVpZ2h0PSc1Micgdmlld0JveD0nMCAwIDIgNTInIGZpbGw9J25vbmUnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+CjxyZWN0IHdpZHRoPScyJyBoZWlnaHQ9JzUyJyBmaWxsPSdibGFjaycgZmlsbC1vcGFjaXR5PScwLjUnLz4KPC9zdmc+Cg=="
                    className="home-image1"
                  />
                  <span className="home-text16">
                    <span>Ideate</span>
                    <br></br>
                    <span>Innovate</span>
                    <br></br>
                    <span>INVENT</span>
                    <br></br>
                  </span>
                </div>
                <h1 className="home-text23 Heading-1">
                  <span># Be Your Own Boss</span>
                  <br></br>
                </h1>
                <div className="home-btn-group">
                  <a
                    href="https://innovate.startupmission.in/#/register"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="home-button button"
                  >
                    <span>
                      <span>JOIN US</span>
                      <br></br>
                    </span>
                  </a>
                </div>
              </div>
              <img
                alt="image23271449"
                src="/playground_assets/webbg2-600h.png"
                className="home-image2"
              />
            </div>
          </div>
          <div className="home-social-bar1">
            <a
              href="https://instagram.com/iedcnssce"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link5"
            >
              <svg viewBox="0 0 877.7142857142857 1024" className="home-icon12">
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
            </a>
            <a
              href="https://www.facebook.com/edc.nssce/"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link6"
            >
              <svg viewBox="0 0 602.2582857142856 1024" className="home-icon14">
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </a>
            <a
              href="https://www.youtube.com/@iedcnssce5376"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link7"
            >
              <svg viewBox="0 0 1024 1024" className="home-icon16">
                <path d="M1013.8 307.2c0 0-10-70.6-40.8-101.6-39-40.8-82.6-41-102.6-43.4-143.2-10.4-358.2-10.4-358.2-10.4h-0.4c0 0-215 0-358.2 10.4-20 2.4-63.6 2.6-102.6 43.4-30.8 31-40.6 101.6-40.6 101.6s-10.2 82.8-10.2 165.8v77.6c0 82.8 10.2 165.8 10.2 165.8s10 70.6 40.6 101.6c39 40.8 90.2 39.4 113 43.8 82 7.8 348.2 10.2 348.2 10.2s215.2-0.4 358.4-10.6c20-2.4 63.6-2.6 102.6-43.4 30.8-31 40.8-101.6 40.8-101.6s10.2-82.8 10.2-165.8v-77.6c-0.2-82.8-10.4-165.8-10.4-165.8zM406.2 644.8v-287.8l276.6 144.4-276.6 143.4z"></path>
              </svg>
            </a>
            <svg viewBox="0 0 877.7142857142857 1024" className="home-icon18">
              <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
            </svg>
          </div>
        </div>
        <div id="About" className="section-container column">
          <div className="home-banner">
            <div className="home-container4">
              <h3 className="home-text29">
                <span>iEDC NSSCE</span>
                <br></br>
              </h3>
            </div>
          </div>
          <div className="home-container5 max-width-container">
            <div className="home-container6">
              <span className="home-text32">
                <span className="home-text33">
                  iEDC NSSCE is one of the top most entrepreneurship development
                  cell in the state with a motto of “BE YOUR OWN BOSS”.
                  Established in 2014 with the objective of creating, fostering
                  and promoting the spirit of entrepreneurship among the youth
                  of our college, we have 30+ incubated startups till date. We
                  are recognized as an Innovation and Entrepreneurship
                  Development Centre by Kerala Startup Mission.
                </span>
                <br></br>
                <br></br>
                <span>
                  We regularly host workshops, talk sessions, competitions, idea
                  fests, etc. to inculcate an entrepreneurship culture in our
                  campus. &quot;TechHub&quot;, our weekly tech-discussions is a
                  proven catalyst for innovation.
                </span>
                <br></br>
              </span>
              <Link to="/contact" className="home-navlink1 button">
                <span>
                  <span>REGISTER A STARTUP</span>
                  <br></br>
                </span>
              </Link>
            </div>
          </div>
          <div className="home-stats">
            <div className="home-stat">
              <h1 className="home-text41">40+</h1>
              <span className="home-text42">
                <span>Incubated Startups</span>
                <br></br>
              </span>
            </div>
            <div className="home-stat1">
              <h1 className="home-text45">50+</h1>
              <span className="home-text46">
                <span>TechHub Sessions</span>
                <br></br>
              </span>
            </div>
            <div className="home-stat2">
              <h1 className="home-text49">500+</h1>
              <span className="home-text50">
                <span>Benefited Students</span>
                <br></br>
              </span>
            </div>
            <div className="home-stat3">
              <h1 className="home-text53">
                <span>24/7</span>
              </h1>
              <span className="home-text55">
                <span>Access for Incubated Startups</span>
                <br></br>
              </span>
            </div>
          </div>
        </div>
        <div id="Events" className="home-activities">
          <h1 className="home-text58">
            <span>Latest Activities</span>
            <br></br>
          </h1>
          <span className="home-text61">---</span>
          <div className="home-container7">
            <GalleryCard3
              title="New Year 2023"
              subtitle="Happy New Year to all innovators out there!"
              image_src="/playground_assets/whatsapp%20image%202022-12-31%20at%2011.58.51%20pm-1500h.jpeg"
              rootClassName="rootClassName4"
            ></GalleryCard3>
            <GalleryCard3
              title="Hiring!"
              subtitle="Call for Department Coordinators"
              image_src="/playground_assets/whatsapp%20image%202023-01-01%20at%209.45.33%20pm-1500h.jpeg"
              rootClassName="rootClassName5"
            ></GalleryCard3>
            <GalleryCard3
              title="Hiring!"
              subtitle="Call for content and creative team"
              image_src="/playground_assets/whatsapp%20image%202023-01-01%20at%209.46.10%20pm-1500h.jpeg"
              rootClassName="rootClassName1"
            ></GalleryCard3>
            <GalleryCard3
              title="Ideathon"
              subtitle="Idea pitching event "
              image_src="/playground_assets/whatsapp%20image%202022-12-30%20at%2012.11.11%20pm-1500h.jpeg"
              rootClassName="rootClassName"
            ></GalleryCard3>
            <GalleryCard3
              title="Tink-Her-Hack"
              subtitle="A 2 day women only hackathon by IEDC NSSCE and TinkerHub on 17-18 Dec 2022"
              image_src="/playground_assets/_mg_0499-1500h.jpg"
              rootClassName="rootClassName6"
            ></GalleryCard3>
            <GalleryCard3
              title="TechHub"
              subtitle="TechHub session: 21st December 2022"
              image_src="/playground_assets/whatsapp%20image%202022-12-20%20at%209.16.59%20pm-1500h.jpeg"
              rootClassName="rootClassName7"
            ></GalleryCard3>
            <GalleryCard3
              title="SDW'22: Learning Stations"
              subtitle="Skill Development Week 22: 20-26 November 2022"
              image_src="/playground_assets/whatsapp%20image%202022-11-19%20at%2012.28.32%20pm-1500h.jpeg"
              rootClassName="rootClassName2"
            ></GalleryCard3>
            <GalleryCard3
              title="SDW'22"
              subtitle="Learning Stations were held at as a pre-event to Skill Development Week 2022"
              image_src="/playground_assets/whatsapp%20image%202022-11-18%20at%207.28.44%20am-1500h.jpeg"
              rootClassName="rootClassName11"
            ></GalleryCard3>
          </div>
        </div>
        <Link to="/events" className="home-navlink2 button">
          <span className="home-text62">
            <span>See more activities</span>
            <br></br>
          </span>
        </Link>
      </div>
      <Footer rootClassName="footer-root-class-name2"></Footer>
    </div>
  )
}

export default Home
