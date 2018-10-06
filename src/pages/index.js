import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <div className="Hero">
      <div className="HeroGroup">
        <h1>How I learned to design and code React apps</h1>
        <p>Welcome to my new Gatsby site.</p>
        <p>I learn ReactJs using Gatsby.</p>
        <Link to="/page-2/">Watch the video</Link>
      </div>
    </div>
    
  </div>
)

export default IndexPage
