import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import GalleryCard3 from '../components/gallery-card3'
import Footer from '../components/footer'
import Header from '../components/header.js'
import './events.css'

const Events = (props) => {
  return (
    <div className="events-container">
      <Helmet>
        <title>Events - IEDC NSSCE</title>
        <meta property="og:title" content="Events - IEDC NSSCE" />
      </Helmet>
      <div className="events-navbar">
      <Header />
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
        <a href ='https://open.spotify.com/show/1bkacxiAEiU8CfHxfVbxjb' target="_blank" rel="noopener">
          <GalleryCard3
            title="Oru Palakkadan Charcha"
            subtitle="Tune in @spotify"
            image_src="/playground_assets/podcast.jpeg"
            rootClassName="rootClassName23"
          ></GalleryCard3>
          </a>
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
