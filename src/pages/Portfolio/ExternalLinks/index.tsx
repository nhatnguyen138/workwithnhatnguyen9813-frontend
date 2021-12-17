import PortfolioExtLink from '../../../components/PortfolioExtLink'
import './_styles.scss'

export default function ExternalLinks() {
  return (
    <div className="Section ExternalLinks">
      <div className="Unselectable Heading">External Links</div>
      <div className="List">
        <PortfolioExtLink
          icon="code"
          title="Project: Human Detection App"
          description="My own take on building a human detection app using Tensorflow.JS."
          url="https://github.com/nhatnguyen9813/human-detection-app"
        />
        <PortfolioExtLink
          icon="code"
          title="GitHub - Crypto Example"
          description="A JavaScript example of some basic crypto concepts."
          url="https://github.com/nhatnguyen9813/crypto-example"
        />
        <PortfolioExtLink
          icon="window"
          title="Netlify App Archive: Blog of Nhat version 2.0"
          description="Archive of my old website 'Blog of Nhat'."
          url="https://blogofnhat-version2.netlify.app/"
        />
      </div>
    </div>
  )
}
