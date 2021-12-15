import React from 'react'
import './_styles.scss'

import Cover from './Cover'
import Aboutme from './Aboutme'
import Portfolio from './Portfolio'
import Blogposts from './Blogposts'

export default function Homepage() {
  return (
    <div className="Homepage">
      <Cover />
      <Aboutme />
      <Portfolio />
      <Blogposts />
    </div>
  )
}
