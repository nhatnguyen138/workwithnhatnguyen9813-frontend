import MetaTags from '../../components/MetaTags'
import PageTitle from '../../components/PageTitle'

const Title = "Articles"
const Subtitle = "Coming soon..."

export default function Articles() {
  return (
    <div className="ArticlesContainer">
      <MetaTags
        section={Title}
        description={Subtitle}
        image="https://i.imgur.com/WYrbInu.jpeg"
      />
      <PageTitle
        title={Title}
        subtitle={Subtitle}
      />
    </div>
  )
}
