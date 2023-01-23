import React from 'react'

import PropTypes from 'prop-types'

import './blog-post-card2.css'

const BlogPostCard2 = (props) => {
  return (
    <div className={`blog-post-card2-blog-post-card2 ${props.rootClassName} `}>
      <img
        alt={props.image_alt}
        src={props.logo}
        className="blog-post-card2-image"
      />
      <div className="blog-post-card2-container">
        <span className="blog-post-card2-text">{props.Year}</span>
        <span className="blog-post-card2-text1">{props.Startup_Name}</span>
        <span className="blog-post-card2-text2">{props.Domain}</span>
        <div className="blog-post-card2-container1">
          <div className="blog-post-card2-profile">
            <span className="blog-post-card2-text3">{props.Founder}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

BlogPostCard2.defaultProps = {
  Domain: 'Domain',
  image_alt: 'image',
  Founder: 'Founder',
  Startup_Name: 'Name',
  Year: 'year',
  rootClassName: '',
  logo: '/playground_assets/ruraly%20logo%20green-400h.png',
}

BlogPostCard2.propTypes = {
  Domain: PropTypes.string,
  image_alt: PropTypes.string,
  Founder: PropTypes.string,
  Startup_Name: PropTypes.string,
  Year: PropTypes.string,
  rootClassName: PropTypes.string,
  logo: PropTypes.string,
}

export default BlogPostCard2
