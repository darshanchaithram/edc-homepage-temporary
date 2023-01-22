import React from 'react'

import PropTypes from 'prop-types'

import './blog-post-card2.css'

const BlogPostCard2 = (props) => {
  return (
    <div className={`blog-post-card2-blog-post-card2 ${props.rootClassName} `}>
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="blog-post-card2-image"
      />
      <div className="blog-post-card2-container">
        <span className="blog-post-card2-text">{props.text}</span>
        <span className="blog-post-card2-text1">{props.text1}</span>
        <span className="blog-post-card2-text2">{props.text2}</span>
        <div className="blog-post-card2-container1">
          <div className="blog-post-card2-profile">
            <img
              alt={props.image_alt1}
              src={props.image_src1}
              image_src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fG1hbiUyMHBvcnRyYWl0fGVufDB8fHx8MTYyNjQzMTMwMw&amp;ixlib=rb-1.2.1&amp;h=1200"
              className="blog-post-card2-image1"
            />
            <span className="blog-post-card2-text3">{props.text3}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

BlogPostCard2.defaultProps = {
  image_src1:
    'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fG1hbiUyMHBvcnRyYWl0fGVufDB8fHx8MTYyNjQzMTMwMw&ixlib=rb-1.2.1&w=200',
  text2: 'Rural Tourism',
  image_alt: 'image',
  image_alt1: 'profile',
  text3: 'Abhinand PK',
  text1: 'Rurally',
  text: '2022',
  image_src: '/playground_assets/ruraly%20logo%20green-400h.png',
  rootClassName: '',
}

BlogPostCard2.propTypes = {
  image_src1: PropTypes.string,
  text2: PropTypes.string,
  image_alt: PropTypes.string,
  image_alt1: PropTypes.string,
  text3: PropTypes.string,
  text1: PropTypes.string,
  text: PropTypes.string,
  image_src: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default BlogPostCard2
