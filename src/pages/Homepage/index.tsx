import MetaTags from '../../components/MetaTags'
import './_styles.scss'

import Cover from './Cover'
import Aboutme from './Aboutme'
import Message from './Message'
import Portfolio from './Portfolio'
import Articles from './Articles'

export default function Homepage() {
  return (
    <div className="HomepageContainer">
      <MetaTags
        section=""
        description="Work with @nhatnguyen9813: Homepage"
        image="https://i.imgur.com/xYmq7OE.png"
      />
      <Cover />
      <Aboutme />
      <Message />
      <Portfolio />
      <Articles />
    </div>
  )
}
