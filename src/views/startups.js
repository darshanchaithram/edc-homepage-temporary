import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import BlogPostCard2 from '../components/blog-post-card2'
import Footer from '../components/footer'
import Header from '../components/header.js'
import './startups.css'

const Startups = (props) => {
  return (
    <div className="startups-container">
      <Helmet>
        <title>Startups - IEDC NSSCE</title>
        <meta property="og:title" content="Startups - IEDC NSSCE" />
      </Helmet>
      <div className="startups-navbar">
      <Header />
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
          logo="/playground_assets/whatsapp%20image%202023-01-23%20at%2012.49.33%20pm-400h.jpeg"
          Domain="E-commerce platform for hostelers"
          Startup_Name="DREAMBEE"
          rootClassName="blog-post-card2-root-class-name1"
          Founder="Abhinand PK"
        ></BlogPostCard2>
        <BlogPostCard2
          Year="2022"
          logo="/playground_assets/alila%20creations-400h.png"
          Domain="Biodegradable PCB"
          Founder="Ajay A"
          Startup_Name="SKAVENGE"
          rootClassName="blog-post-card2-root-class-name2"
        ></BlogPostCard2>
        <BlogPostCard2
          Year="2022"
          Domain="Rural Tourism"
          Founder="Abhinand PK"
          Startup_Name="RURALLY"
          rootClassName="blog-post-card2-root-class-name"
        ></BlogPostCard2>
      </div>
      <div className="startups-blog1">
        <BlogPostCard2
          Year="2020"
          logo="/playground_assets/gagan%20logo-400h.png"
          Domain="Student Satellite R&amp;D"
          Founder="Gokul Krishna H"
          Startup_Name="GAGAN AEROSPACE"
          rootClassName="blog-post-card2-root-class-name12"
        ></BlogPostCard2>
        <BlogPostCard2
          Year="2020"
          text2="x"
          Domain="Saas"
          Startup_Name="BITNUT TECHNOLOGIES"
          rootClassName="blog-post-card2-root-class-name13"
          logo="/playground_assets/alila%20creations-400h.png"
        ></BlogPostCard2>
        <BlogPostCard2
          logo="/playground_assets/nivata%20infosec-400h.png"
          text5="Cyber Security"
          Domain="Cybersecurity"
          Founder="Sreekanth Sasi, Ashish Shaji Thomas, Sanjay KS"
          Startup_Name="NIVATA INFOSEC"
          rootClassName="blog-post-card2-root-class-name14"
          Year="2019"
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
      <div className="startups-blog4">
        <BlogPostCard2
          Year="2016"
          logo="/playground_assets/matchbox-400h.jpg"
          Domain="Cinema"
          Founder="Anirudh PK"
          Startup_Name="MATCHBOX MEDIA"
          rootClassName="blog-post-card2-root-class-name21"
        ></BlogPostCard2>
        <BlogPostCard2
          Year="YEAR"
          logo="/playground_assets/"
          text2="x"
          Domain=""
          Founder=""
          Startup_Name=""
          rootClassName="blog-post-card2-root-class-name22"
        ></BlogPostCard2>
        <BlogPostCard2
          logo="/playground_assets/"
          text5=""
          Domain=""
          Founder=""
          Startup_Name=""
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
