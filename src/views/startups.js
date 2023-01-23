import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import BlogPostCard2 from '../components/blog-post-card2'
import Footer from '../components/footer'
import './startups.css'

const Startups = (props) => {
  return (
    <div className="startups-container">
      <Helmet>
        <title>Startups - IEDC NSSCE</title>
        <meta property="og:title" content="Startups - IEDC NSSCE" />
      </Helmet>
      <div className="startups-navbar">
        <header
          data-role="Header"
          className="startups-header max-width-container"
        >
          <div className="startups-navbar1">
            <div className="startups-container1"></div>
            <div className="startups-middle">
              <div className="startups-left">
                <Link to="/" className="startups-text navbar-link">
                  ABOUT
                </Link>
                <Link to="/startups" className="startups-text01 navbar-link">
                  STARTUPS
                </Link>
                <Link to="/our-team" className="startups-text02 navbar-link">
                  OUR TEAM
                </Link>
              </div>
              <Link to="/" className="startups-navlink">
                <img
                  alt="image"
                  src="/playground_assets/edc%20logo%5B2%5D-200h.png"
                  className="startups-image navbar-logo-title"
                />
              </Link>
              <div className="startups-right">
                <Link to="/events" className="startups-text03 navbar-link">
                  EVENTS
                </Link>
                <Link
                  to="/subscription"
                  className="startups-text04 navbar-link"
                >
                  SUBSCRIBE
                </Link>
                <Link to="/contact" className="startups-text05 navbar-link">
                  CONTACT
                </Link>
              </div>
            </div>
            <div className="startups-icons"></div>
          </div>
          <div data-role="BurgerMenu" className="startups-burger-menu">
            <svg viewBox="0 0 1024 1024" className="startups-icon">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-role="MobileMenu" className="startups-mobile-menu">
            <div className="startups-nav">
              <div className="startups-container2">
                <Link to="/" className="startups-logo-center">
                  <span>iEDC NSSCE</span>
                  <br></br>
                </Link>
                <div
                  data-role="CloseMobileMenu"
                  className="startups-close-mobile-menu"
                >
                  <Link to="/" className="startups-navlink1">
                    <svg viewBox="0 0 1024 1024" className="startups-icon02">
                      <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                    </svg>
                  </Link>
                </div>
              </div>
              <div className="startups-middle1">
                <Link to="/" className="startups-text08">
                  ABOUT
                </Link>
                <Link to="/startups" className="startups-text09">
                  STARTUPS
                </Link>
                <Link to="/our-team" className="startups-text10">
                  <span>OUR TEAM</span>
                  <br></br>
                </Link>
                <Link to="/events" className="startups-text13">
                  EVENTS
                </Link>
                <Link to="/" className="startups-text14">
                  SUBSCRIBE
                </Link>
                <Link to="/contact" className="startups-text15">
                  CONTACT
                </Link>
              </div>
              <div className="startups-social-bar">
                <a
                  href="https://www.linkedin.com/company/edc-nssce"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="startups-link"
                >
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="startups-icon04"
                  >
                    <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                  </svg>
                </a>
                <a
                  href="https://instagram.com/iedcnssce"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="startups-link1"
                >
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="startups-icon06"
                  >
                    <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com/edc.nssce/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="startups-link2"
                >
                  <svg
                    viewBox="0 0 602.2582857142856 1024"
                    className="startups-icon08"
                  >
                    <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                  </svg>
                </a>
                <a
                  href="https://www.youtube.com/@iedcnssce5376"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="startups-link3"
                >
                  <svg viewBox="0 0 1024 1024" className="startups-icon10">
                    <path d="M1013.8 307.2c0 0-10-70.6-40.8-101.6-39-40.8-82.6-41-102.6-43.4-143.2-10.4-358.2-10.4-358.2-10.4h-0.4c0 0-215 0-358.2 10.4-20 2.4-63.6 2.6-102.6 43.4-30.8 31-40.6 101.6-40.6 101.6s-10.2 82.8-10.2 165.8v77.6c0 82.8 10.2 165.8 10.2 165.8s10 70.6 40.6 101.6c39 40.8 90.2 39.4 113 43.8 82 7.8 348.2 10.2 348.2 10.2s215.2-0.4 358.4-10.6c20-2.4 63.6-2.6 102.6-43.4 30.8-31 40.8-101.6 40.8-101.6s10.2-82.8 10.2-165.8v-77.6c-0.2-82.8-10.4-165.8-10.4-165.8zM406.2 644.8v-287.8l276.6 144.4-276.6 143.4z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </header>
      </div>
      <div className="startups-hero">
        <div className="startups-container3">
          <h1 className="startups-text16">
            <span>Team Up. I</span>
            <span>
              nnovate.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span>Build.</span>
            <br></br>
          </h1>
          <h2 className="startups-text21">
            <span>Meet some of the newest startups from NSS</span>
            <br></br>
          </h2>
        </div>
      </div>
      <div className="startups-blog">
        <BlogPostCard2
          Year="2022"
          Domain="Rural Tourism"
          Founder="Abhinand PK"
          Startup_Name="RURALLY"
          rootClassName="blog-post-card2-root-class-name"
        ></BlogPostCard2>
        <BlogPostCard2
          Year="2022"
          Domain="Biodegradable PCB"
          Founder="founder"
          Startup_Name="SKAVENGE"
          rootClassName="blog-post-card2-root-class-name2"
          logo="/playground_assets/alila%20creations-400h.png"
        ></BlogPostCard2>
        <BlogPostCard2
          Year="2020"
          logo="/playground_assets/gagan%20logo-400h.png"
          Domain="Student Satellite R&amp;D"
          Founder="Gokul"
          Startup_Name="GAGAN AEROSPACE"
          rootClassName="blog-post-card2-root-class-name12"
        ></BlogPostCard2>
      </div>
      <div className="startups-blog1">
        <BlogPostCard2
          Year="2020"
          text2="x"
          Domain="Saas"
          Startup_Name="BITNUT TECHNOLOGIES"
          rootClassName="blog-post-card2-root-class-name13"
        ></BlogPostCard2>
        <BlogPostCard2
          Year="year"
          Domain="SAAS"
          Startup_Name="DREAMBEE"
          rootClassName="blog-post-card2-root-class-name1"
          logo="/playground_assets/alila%20creations-400h.png"
        ></BlogPostCard2>
        <BlogPostCard2
          logo="/playground_assets/nivata%20infosec-400h.png"
          text5="Cyber Security"
          Domain="Cybersecurity"
          Founder="Sreekanth Sasi, Ashish Shaji Thomas, Sanjay KS"
          Startup_Name="NIVATA INFOSEC"
          rootClassName="blog-post-card2-root-class-name14"
        ></BlogPostCard2>
      </div>
      <div className="startups-blog2">
        <BlogPostCard2
          logo="/playground_assets/kenlead-400h.png"
          Domain="Book Publishers"
          Founder="Sonu Krishnan"
          Startup_Name="Kenlead"
          rootClassName="blog-post-card2-root-class-name15"
        ></BlogPostCard2>
        <BlogPostCard2
          Year="YEAR"
          logo="/playground_assets/lentark-400h.png"
          text2="x"
          Domain="Hardware Tech"
          Founder="Mohammed Saheer Marakathel"
          Startup_Name="Lentark"
          rootClassName="blog-post-card2-root-class-name16"
        ></BlogPostCard2>
        <BlogPostCard2
          logo="/playground_assets/tricodia-400h.png"
          text5="Cyber Security"
          Domain="Software Consulting"
          Founder="Sachin Dev"
          Startup_Name="Tricodia"
          rootClassName="blog-post-card2-root-class-name17"
        ></BlogPostCard2>
      </div>
      <div className="startups-blog3">
        <BlogPostCard2
          logo="/playground_assets/hexaren-400h.png"
          Domain="Book Publishers"
          Founder="Govind"
          Startup_Name="Hexaren"
          rootClassName="blog-post-card2-root-class-name18"
        ></BlogPostCard2>
        <BlogPostCard2
          Year="YEAR"
          logo="/playground_assets/phacsin-400h.png"
          text2="x"
          Domain="Product Development"
          Founder="Harikrishnan R"
          Startup_Name="Phacsin"
          rootClassName="blog-post-card2-root-class-name19"
        ></BlogPostCard2>
        <BlogPostCard2
          logo="/playground_assets/toysmiths-400h.png"
          text5="Cyber Security"
          Domain="Robotics"
          Founder="Fayad S"
          Startup_Name="TOYSMITHS"
          rootClassName="blog-post-card2-root-class-name20"
        ></BlogPostCard2>
      </div>
      <div className="startups-blog4">
        <BlogPostCard2
          logo="/playground_assets/insi8-400h.png"
          Domain="Software"
          Founder="Sooraj R"
          Startup_Name="INSI8"
          rootClassName="blog-post-card2-root-class-name21"
        ></BlogPostCard2>
        <BlogPostCard2
          Year="YEAR"
          logo="/playground_assets/zerone-400h.png"
          text2="x"
          Domain="Product Development"
          Founder="Sachin Dev"
          Startup_Name="Zerone"
          rootClassName="blog-post-card2-root-class-name22"
        ></BlogPostCard2>
        <BlogPostCard2
          logo="/playground_assets/karela-400h.png"
          text5="Cyber Security"
          Domain="Software"
          Founder="Athul R"
          Startup_Name="Karela"
          rootClassName="blog-post-card2-root-class-name23"
        ></BlogPostCard2>
      </div>
      <span className="startups-text24">
        <span>And many more!</span>
        <br></br>
      </span>
      <Footer rootClassName="footer-root-class-name5"></Footer>
    </div>
  )
}

export default Startups
