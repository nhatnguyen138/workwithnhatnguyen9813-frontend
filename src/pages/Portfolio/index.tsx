import MetaTags from '../../components/MetaTags'
import PageTitle from '../../components/PageTitle'
import './_styles.scss'

import Overview from './Overview'
import Projects from './Projects'
import TechPreferences from './TechPreferences'
import Comments from './Comments'
import Designs from './Designs'
import ExternalLinks from './ExternalLinks'

const Title = "Portfolio"
const Subtitle = "Showcase of my selected work/past projects"

export default function Portfolio() {
  return (
    <div className="PortfolioContainer">
      <MetaTags
        section={Title}
        description={Subtitle}
        image="https://i.imgur.com/xYmq7OE.png"
      />
      <PageTitle
        title={Title}
        subtitle={Subtitle}
      />
      <Overview />
      <Projects />
      <TechPreferences />
      <Designs />
      <Comments />
      <ExternalLinks />
    </div>
  )
}
