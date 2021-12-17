import './_styles.scss'

interface PortfolioCardProps {
  action: string,
  text: string,
  technologies: Array<string>
}

export default function PortfolioCard(props:PortfolioCardProps) {
  const { action, text, technologies } = props
  return (
    <div className="PortfolioCard">
      <div className="Unselectable LargeText">{action}</div>
      <div className="Text">{text}</div>
      <div className="Technologies">
        <span>Keys:</span>
        {technologies && technologies.map((tech, i) => {
          return ( <img key={i} className="Technology" src={`/logos/${tech}.png`} alt={`icon-${tech}`} /> )
        })}
      </div>
    </div>
  )
}
