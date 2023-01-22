import React from 'react'

import PropTypes from 'prop-types'

import './blog-post-card3.css'

const BlogPostCard3 = (props) => {
  return (
    <div className="blog-post-card3-blog-post-card3">
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="blog-post-card3-image"
      />
      <div className="blog-post-card3-container">
        <span className="blog-post-card3-text">{props.text}</span>
        <span className="blog-post-card3-text1">{props.text1}</span>
        <span className="blog-post-card3-text2">{props.text2}</span>
        <div className="blog-post-card3-container1">
          <div className="blog-post-card3-profile">
            <img
              alt={props.image_alt1}
              src={props.image_src1}
              image_src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fG1hbiUyMHBvcnRyYWl0fGVufDB8fHx8MTYyNjQzMTMwMw&amp;ixlib=rb-1.2.1&amp;h=1200"
              className="blog-post-card3-image1"
            />
            <span className="blog-post-card3-text3">{props.text3}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

BlogPostCard3.defaultProps = {
  image_src: '/playground_assets/tricodia-400h.png',
  image_alt1: 'profile',
  image_alt: 'image',
  text3: 'Gokul xxxx',
  text1: 'Gagan Aerospace',
  text: '2022',
  text2:
    'Gagan Aerospace is a startup incubated at NSSCE working on developing a student satellite.',
  image_src1:
    'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fG1hbiUyMHBvcnRyYWl0fGVufDB8fHx8MTYyNjQzMTMwMw&ixlib=rb-1.2.1&w=200',
}

BlogPostCard3.propTypes = {
  image_src: PropTypes.string,
  image_alt1: PropTypes.string,
  image_alt: PropTypes.string,
  text3: PropTypes.string,
  text1: PropTypes.string,
  text: PropTypes.string,
  text2: PropTypes.string,
  image_src1: PropTypes.string,
}

export default BlogPostCard3
