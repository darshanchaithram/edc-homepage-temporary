import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './footer.css'

const Footer = (props) => {
  return (
    <div id="Footer" className={`footer-footer ${props.rootClassName} `}>
      <div id="1-Footer" className="max-width-container">
        <footer className="footer-footer1">
          <div className="footer-container">
            <h3 className="footer-text Heading-3">
              <span className="">iEDC NSSCE</span>
              <br className=""></br>
            </h3>
            <span className="footer-text03">
              <span className="">
                Innovation and Entrepreneurship Development Cell,
              </span>
              <br className=""></br>
              <span className="">
                Administrative Block, NSS College of Engineering,
              </span>
              <br className=""></br>
              <span className="">Palakkad - 678008</span>
              <br className=""></br>
            </span>
            <span className="footer-text10">
              <span className="">+91 9061974471</span>
              <br className=""></br>
            </span>
            <span className="footer-text13">{props.text}</span>
          </div>
          <div className="footer-links-container">
            <div className="footer-container1">
              <Link to="/startups" className="footer-navlink">
                {props.text1}
              </Link>
              <Link to="/our-team" className="footer-navlink1">
                {props.text2}
              </Link>
              <Link to="/events" className="footer-navlink2">
                {props.text3}
              </Link>
              <Link to="/facilities" className="footer-navlink3">
                {props.text4}
              </Link>
            </div>
            <div className="footer-container2">
              <Link to="/i-i-c-n-s-s-c-e" className="footer-navlink4">
                {props.text5}
              </Link>
              <Link to="/tinker-hub-n-s-s-c-e" className="footer-navlink5">
                {props.text6}
              </Link>
              <Link to="/web-team" className="footer-navlink6">
                <span className="">Web Team</span>
                <br className=""></br>
              </Link>
              <Link to="/web-team" className="footer-navlink7">
                <span className="">© edcnssce-2022</span>
                <br className=""></br>
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

Footer.defaultProps = {
  text5: 'IIC',
  text: 'edc@nssce.ac.in\n',
  text2: 'Team',
  rootClassName: '',
  text3: 'Activities',
  text1: 'Startups',
  text6: 'TinkerHub\n',
  text4: 'Facilities',
}

Footer.propTypes = {
  text5: PropTypes.string,
  text: PropTypes.string,
  text2: PropTypes.string,
  rootClassName: PropTypes.string,
  text3: PropTypes.string,
  text1: PropTypes.string,
  text6: PropTypes.string,
  text4: PropTypes.string,
}

export default Footer
