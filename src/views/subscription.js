import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Footer from '../components/footer'
import Header from '../components/header.js'
import './subscription.css'

const Subscription = (props) => {
  return (
    <div className="subscription-container">
      <Helmet>
        <title>Subscription - IEDC NSSCE</title>
        <meta property="og:title" content="Subscription - IEDC NSSCE" />
      </Helmet>
      <div className="subscription-navbar">
      <Header />
      </div>
      <div className="subscription-hero">
        <div className="subscription-container3">
          <img
            alt="image"
            src="/playground_assets/edc%20loader-400h.gif"
            className="subscription-image1"
          />
        </div>
      </div>
      <Footer rootClassName="footer-root-class-name8"></Footer>
    </div>
  )
}

export default Subscription
