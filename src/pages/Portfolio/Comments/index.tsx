import PortfolioComment from '../../../components/PortfolioComment'
import './_styles.scss'

export default function Comments() {
  return (
    <div className="Section Comments">
      <PortfolioComment
        img="mannyse"
        comment="I am James's former recruiter and manager. After he was recruited at AI Talent to work in a start-up project in May 2021, he had shown to be a smart and hard-working individual. Accordingly, he had helped a lot for the final product to be developed."
        name="Manny Se"
        relation="Former manager"
        title="Senior Cloud Developer &#64; AI Australia"
        contact="manny.se&#64;aiaustralia.tech"
      />
      <PortfolioComment
        img="shaidee"
        comment="James proved himself to be a decent frontend developer within the time we worked together. I was impressed of some of his knowledge of frontend design as well as his attention to detail."
        name="Shaidee Alingcastre"
        relation="Former colleague"
        title="Full Stack Web Developer &#64; IGA"
        contact="&#64;shaidee-alingcastre (LinkedIn)"
      />
      <PortfolioComment
        img="tungta"
        comment="Nhat (James) collaborated with our dev team to redesign one of our products' prototype and he did a very good job."
        name="Tùng Tạ"
        relation="Former client"
        title="IT Recruitment Manager &#64; VCCorp"
      />
    </div>
  )
}
