import PortfolioCard from "../../../components/PortfolioCard"

export default function Overview() {
  return (
    <div className="Section Overview">
      <p className="Caption">What have I done in during my career?</p>
      <PortfolioCard
        action="Build"
        text="sites &amp; apps to look stunning yet still be optimal."
        technologies={["react", "ts", "sass", "graphql"]}
      />
      <PortfolioCard
        action="Design"
        text="clean, eye-catching and mobile-responsive prototypes."
        technologies={["html5", "css", "js", "bootstrap", "figma"]}
      />
      <PortfolioCard
        action="Deploy"
        text="backend via admin pages &amp; third-party APIs."
        technologies={["nodejs", "mongodb", "graphql"]}
      />
    </div>
  )
}
