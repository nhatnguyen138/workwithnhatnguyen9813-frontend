import { Link } from 'react-router-dom'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import './_styles.scss'

export default function Aboutme() {
  return (
    <div className="Aboutme Section">
      <div className="SectionWidth">
        <img className="Portrait" src="/images/aboutme-portrait.jpg" alt="Aboutme Portrait" />
        <div className="Text">
          <p className="pHeading Unselectable">ABOUT ME</p>
          <article className="pContent">
            <h3>Welcome to <span>&#64;nhatnguyen9813</span>'s ePortfolio!</h3>
            <p>While I go by <i>Nhat K. "James" Nguyen</i>, you can just casually call me Nhat or James. I'm Vietnamese 🇻🇳 and I am currently living in Australia 🇦🇺 working as a ReactJS frontend developer.</p>
            <p>I have 2+ years of doing web (specifically frontend/UI) development and I always look forward to building sites &amp; apps that optimal yet also eye-catching.</p>
            <p><AnchorLink href="#ContactInfo">&gt;&gt; Contact information</AnchorLink></p>
            <p><Link to="/aboutme">&gt;&gt; More about me</Link></p>
          </article>
        </div>
      </div>
      
    </div>
  )
}
