import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import FeatureCard1 from '../components/feature-card1'
import Footer from '../components/footer'
import Header from '../components/header.js'
import './our-team.css'

const OurTeam = (props) => {
  return (
    <div className="our-team-container">
      <Helmet>
        <title>Our-Team - IEDC NSSCE</title>
        <meta property="og:title" content="Our-Team - IEDC NSSCE" />
      </Helmet>
      <div className="our-team-navbar">
      <Header />
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
          <FeatureCard1
              Name="Rohini G"
              Role="Nodal Officer"
              image_src="/playground_assets/rohini-200w.jpg"
              rootClassName="rootClassName4"
            ></FeatureCard1>
            <FeatureCard1
              Name="Vaisakh T"
              Role="Nodal Officer"
              image_alt="Nodal officer"
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
            <FeatureCard1
              Name="Abhnand PK"
              Role="Chief Finance Officer"
              image_src="/playground_assets/abhinand-200h.jpg"
              rootClassName="rootClassName4"
            ></FeatureCard1>
            <FeatureCard1
              Name="Abirami Gopikrishnan"
              Role="Chief Operations Officer"
              image_src="/playground_assets/abirami-200h.jpg"
              rootClassName="rootClassName4"
            ></FeatureCard1>
            <a href='https://www.darshanchaithram.live' target="_blank" rel="noopener">
              <FeatureCard1
                Name="Darshan S"
                Role="Chief Technology Officer"
                image_alt="Nodal"
                image_src="/playground_assets/darshan-200h.jpg"
                rootClassName="rootClassName1"
              ></FeatureCard1>
            </a>
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
              Role="IoT Lead"
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
              Name="Vyshakh G Nair"
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
              Role="TinkerHub Campus Lead"
              image_src="/playground_assets/20230123_152513~2-200w.jpg"
              rootClassName="rootClassName17"
            ></FeatureCard1>
            <FeatureCard1
              Name="Aravind S"
              Role="TinkerHub Tech Lead"
              image_src="/playground_assets/aravind-200h.jpg"
              rootClassName="rootClassName17"
            ></FeatureCard1>
            <FeatureCard1
              Name="Aleena KT"
              Role="TinkerHub Media Lead"
              image_src="/playground_assets/aleena-200h.jpg"
              rootClassName="rootClassName17"
            ></FeatureCard1>
            <FeatureCard1
              Name="Chaitanya Liz"
              Role="IIC-Lead"
              image_src="/playground_assets/chaitanya-liz-200h.jpg"
              rootClassName="rootClassName19"
            ></FeatureCard1>
            <FeatureCard1
              Name="R Gopan"
              Role="IIC-Startups Coordinator"
              image_src="/playground_assets/gopan-200h.jpg"
              rootClassName="rootClassName19"
            ></FeatureCard1>
            <FeatureCard1
              Name="Musthafa Jalal"
              Role="IIC-Innovation Coordinator"
              image_src="/playground_assets/musthafa-200h.jpg"
              rootClassName="rootClassName19"
            ></FeatureCard1>
            <FeatureCard1
              Name="Alok JS"
              Role="IIC-Social Media Coordinator"
              image_src="/playground_assets/alok-200h.jpg"
              rootClassName="rootClassName19"
            ></FeatureCard1>
            <FeatureCard1
              Name="JR Sreevishak"
              Role="IIC-IPR Coordinator"
              image_src="/playground_assets/sreevishak-200h.jpg"
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
