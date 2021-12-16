import MetaTags from '../../components/MetaTags'
import PageTitle from '../../components/PageTitle'

const Title = "About Me"
const Subtitle = "I build, design and deploy"

export default function AboutMe() {
  return (
    <div className="AboutMeContainer">
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
