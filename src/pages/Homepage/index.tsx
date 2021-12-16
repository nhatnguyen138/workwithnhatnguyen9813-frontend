import React from 'react'
import './_styles.scss'

import Cover from './Cover'
import Aboutme from './Aboutme'
import Portfolio from './Portfolio'
import Articles from './Articles'

export default function Homepage() {
  return (
    <div className="HomepageContainer">
      <Cover />
      <Aboutme />
      <Portfolio />
      <Articles />
    </div>
  )
}
