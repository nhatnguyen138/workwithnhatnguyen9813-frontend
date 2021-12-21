import ScrollAnimation from 'react-animate-on-scroll'
import './_styles.scss'

interface PortfolioExtLinkProps {
  icon: string,
  title: string,
  description: string,
  url: string
}

export default function PortfolioExtLink(props:PortfolioExtLinkProps) {
  const { icon, title, description, url } = props
  return (
    <div className="PortfolioExtLink">
      <img className="Unselectable Icon" src={`/images/icon-${icon}.svg`} alt={icon} />
      <div className="Text">
        <div className="Title">
          <a href={url} target="_blank" rel="noopener noreferrer">{title}</a>
        </div>
        <div className="Description">{description}</div>
      </div>
    </div>
  )
}
