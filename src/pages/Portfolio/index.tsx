import MetaTags from '../../components/MetaTags'
import PageTitle from '../../components/PageTitle'

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
    </div>
  )
}
