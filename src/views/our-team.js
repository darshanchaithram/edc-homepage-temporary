import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import FeatureCard1 from '../components/feature-card1'
import Footer from '../components/footer'
import './our-team.css'

const OurTeam = (props) => {
  return (
    <div className="our-team-container">
      <Helmet>
        <title>Our-Team - IEDC NSSCE</title>
        <meta property="og:title" content="Our-Team - IEDC NSSCE" />
      </Helmet>
      <div className="our-team-navbar">
        <header
          data-role="Header"
          className="our-team-header max-width-container"
        >
          <div className="our-team-navbar1">
            <div className="our-team-container1"></div>
            <div className="our-team-middle">
              <div className="our-team-left">
                <Link to="/" className="our-team-text navbar-link">
                  ABOUT
                </Link>
                <Link to="/startups" className="our-team-text01 navbar-link">
                  STARTUPS
                </Link>
                <Link to="/our-team" className="our-team-text02 navbar-link">
                  OUR TEAM
                </Link>
              </div>
              <Link to="/" className="our-team-navlink">
                <img
                  alt="image"
                  src="/playground_assets/edc%20logo%5B2%5D-200h.png"
                  className="our-team-image navbar-logo-title"
                />
              </Link>
              <div className="our-team-right">
                <Link to="/events" className="our-team-text03 navbar-link">
                  EVENTS
                </Link>
                <Link
                  to="/subscription"
                  className="our-team-text04 navbar-link"
                >
                  SUBSCRIBE
                </Link>
                <Link to="/contact" className="our-team-text05 navbar-link">
                  CONTACT
                </Link>
              </div>
            </div>
            <div className="our-team-icons"></div>
          </div>
          <div data-role="BurgerMenu" className="our-team-burger-menu">
            <svg viewBox="0 0 1024 1024" className="our-team-icon">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-role="MobileMenu" className="our-team-mobile-menu">
            <div className="our-team-nav">
              <div className="our-team-container2">
                <Link to="/" className="our-team-logo-center">
                  <span>iEDC NSSCE</span>
                  <br></br>
                </Link>
                <div
                  data-role="CloseMobileMenu"
                  className="our-team-close-mobile-menu"
                >
                  <Link to="/" className="our-team-navlink1">
                    <svg viewBox="0 0 1024 1024" className="our-team-icon02">
                      <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                    </svg>
                  </Link>
                </div>
              </div>
              <div className="our-team-middle1">
                <Link to="/" className="our-team-text08">
                  ABOUT
                </Link>
                <Link to="/startups" className="our-team-text09">
                  STARTUPS
                </Link>
                <Link to="/our-team" className="our-team-text10">
                  <span>OUR TEAM</span>
                  <br></br>
                </Link>
                <Link to="/events" className="our-team-text13">
                  EVENTS
                </Link>
                <Link to="/" className="our-team-text14">
                  SUBSCRIBE
                </Link>
                <Link to="/contact" className="our-team-text15">
                  CONTACT
                </Link>
              </div>
              <div className="our-team-social-bar">
                <a
                  href="https://www.linkedin.com/company/edc-nssce"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="our-team-link"
                >
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="our-team-icon04"
                  >
                    <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                  </svg>
                </a>
                <a
                  href="https://instagram.com/iedcnssce"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="our-team-link1"
                >
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="our-team-icon06"
                  >
                    <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com/edc.nssce/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="our-team-link2"
                >
                  <svg
                    viewBox="0 0 602.2582857142856 1024"
                    className="our-team-icon08"
                  >
                    <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                  </svg>
                </a>
                <a
                  href="https://www.youtube.com/@iedcnssce5376"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="our-team-link3"
                >
                  <svg viewBox="0 0 1024 1024" className="our-team-icon10">
                    <path d="M1013.8 307.2c0 0-10-70.6-40.8-101.6-39-40.8-82.6-41-102.6-43.4-143.2-10.4-358.2-10.4-358.2-10.4h-0.4c0 0-215 0-358.2 10.4-20 2.4-63.6 2.6-102.6 43.4-30.8 31-40.6 101.6-40.6 101.6s-10.2 82.8-10.2 165.8v77.6c0 82.8 10.2 165.8 10.2 165.8s10 70.6 40.6 101.6c39 40.8 90.2 39.4 113 43.8 82 7.8 348.2 10.2 348.2 10.2s215.2-0.4 358.4-10.6c20-2.4 63.6-2.6 102.6-43.4 30.8-31 40.8-101.6 40.8-101.6s10.2-82.8 10.2-165.8v-77.6c-0.2-82.8-10.4-165.8-10.4-165.8zM406.2 644.8v-287.8l276.6 144.4-276.6 143.4z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </header>
      </div>
      <div className="our-team-hero">
        <div className="our-team-features">
          <h1 className="our-team-text16">
            <span>Our pack of &apos;22</span>
            <br></br>
          </h1>
          <span className="our-team-text19">
            <span>Click to expand*</span>
            <br></br>
          </span>
          <div className="our-team-container3">
            <a
              href="https://linkedin.com/in/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FeatureCard1
                Name="Rohini G"
                Role="Nodal Officer"
                image_alt="Nodal Officer"
                image_src="/playground_assets/whatsapp%20image%202022-09-23%20at%209.35.33%20am-200h.jpeg"
                rootClassName="rootClassName"
                className="our-team-component"
              ></FeatureCard1>
            </a>
            <FeatureCard1
              Name="Vaisakh T"
              Role="Nodal Officer"
              image_alt="Nodal"
              image_src="/playground_assets/vaisakh-200h.jpg"
              rootClassName="rootClassName1"
            ></FeatureCard1>
            <FeatureCard1
              Name="Aswin R Nath"
              Role="Chief Executive Officer"
              image_alt="Chief Executive Officer"
              image_src="/playground_assets/aswin-r-nath-200h.jpg"
              rootClassName="rootClassName3"
            ></FeatureCard1>
            <a
              href="https://linkedin.com/in/darshan-chaithram"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FeatureCard1
                Name="Abhinand PK"
                Role="Chief Finance Officer"
                image_alt="CFO"
                image_src="/playground_assets/whatsapp%20image%202022-07-16%20at%207.01.27%20pm-200h.jpeg"
                rootClassName="rootClassName2"
                className="our-team-component03"
              ></FeatureCard1>
            </a>
            <FeatureCard1
              Name="Abhirami Gopikrishnan"
              Role="Chief Operations Officer"
              image_src="/playground_assets/abhirami-200h.jpg"
              rootClassName="rootClassName4"
            ></FeatureCard1>
            <FeatureCard1
              Name="Darshan S"
              Role="Chief Technical Officer"
              image_src="/playground_assets/darshansq-200h.jpg"
              rootClassName="rootClassName15"
            ></FeatureCard1>
            <FeatureCard1
              Name="Aswinkrishnan B"
              Role="Chief Marketing Officer"
              image_src="/playground_assets/aswin-krishnanb-200h.jpeg"
              rootClassName="rootClassName14"
            ></FeatureCard1>
            <FeatureCard1
              Name="Sivamrutha "
              Role="Chief Creative Officer"
              image_src="/playground_assets/sivamrutha-200h.jpg"
              rootClassName="rootClassName13"
            ></FeatureCard1>
            <FeatureCard1
              Name="Arun Roy"
              Role="Chief Programme Officer"
              image_src="/playground_assets/arun-roy-200h.jpg"
              rootClassName="rootClassName12"
            ></FeatureCard1>
            <FeatureCard1
              Name="Akshay M"
              Role="IoT Leaf"
              image_src="/playground_assets/akshay-200h.jpg"
              rootClassName="rootClassName11"
            ></FeatureCard1>
            <FeatureCard1
              Name="Arun K"
              Role="IoT Lead"
              image_src="/playground_assets/arunk-200h.png"
              rootClassName="rootClassName10"
            ></FeatureCard1>
            <FeatureCard1
              Name="Parvathy Manoj"
              Role="Content Team Head"
              image_src="/playground_assets/parvathy-200w.jpeg"
              rootClassName="rootClassName6"
            ></FeatureCard1>
            <FeatureCard1
              Name="Visak Jayan"
              Role="Design Team Head"
              image_src="/playground_assets/visak-200h.jpeg"
              rootClassName="rootClassName7"
            ></FeatureCard1>
            <FeatureCard1
              Name="Devi Mahesh"
              Role="Student Coordinator"
              image_src="/playground_assets/devi-200w.jpeg"
              rootClassName="rootClassName9"
            ></FeatureCard1>
            <FeatureCard1
              Name="Gokul "
              Role="Student Coordinator"
              image_src="/playground_assets/Gokul-200h.jpg"
              rootClassName="rootClassName8"
            ></FeatureCard1>
            <FeatureCard1
              Name="Vyshakh G"
              Role="Activity Manager"
              image_src="/playground_assets/vyshakh-g-200w.jpeg"
              rootClassName="rootClassName5"
            ></FeatureCard1>
            <FeatureCard1
              Name="Shithin Prakash"
              Role="Activity Manager"
              image_src="/playground_assets/shithin-200w.jpeg"
              rootClassName="rootClassName16"
            ></FeatureCard1>
            <FeatureCard1
              Name="Abhinav Gopinath"
              Role="Project Head"
              image_src="/playground_assets/Abhinav-200h.jpg"
              rootClassName="rootClassName18"
            ></FeatureCard1>
            <FeatureCard1
              Name="Ananya Sreeram"
              Role="TinkerHub Lead"
              image_src="/playground_assets/20230123_152513~2-200w.jpg"
              rootClassName="rootClassName17"
            ></FeatureCard1>
            <FeatureCard1
              Name="Chaitanya Liz"
              Role="IIC Lead"
              image_src="/playground_assets/chaitanya-liz-200h.jpg"
              rootClassName="rootClassName19"
            ></FeatureCard1>
          </div>
        </div>
      </div>
      <Footer rootClassName="footer-root-class-name6"></Footer>
    </div>
  )
}

export default OurTeam
