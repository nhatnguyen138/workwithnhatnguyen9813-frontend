import PortfolioExtLink from '../../../components/PortfolioExtLink'
import './_styles.scss'

export default function ExternalLinks() {
  return (
    <div className="Section ExternalLinks">
      <div className="Unselectable Heading">External Links</div>
      <div className="List">
        <PortfolioExtLink
          icon="code"
          title="Simple Human Detection App"
          description="When I started having a certain interest in image recognition, I tried to build a human detection app using Tensorflow.JS."
          url="https://github.com/nhatnguyen9813/human-detection-app"
        />
        <PortfolioExtLink
          icon="window"
          title="Project: Flickr Displayr on Netlify"
          description="The app which allows you to search for public photos through the (very tricky) Flickr API."
          url="https://flickr-displayr.netlify.app/"
        />
        <PortfolioExtLink
          icon="code"
          title="GitHub - Crypto Example"
          description="A JavaScript example of some basic crypto concepts as cybersecurity was the major I studied in university."
          url="https://github.com/nhatnguyen9813/crypto-example"
        />
      </div>
    </div>
  )
}
