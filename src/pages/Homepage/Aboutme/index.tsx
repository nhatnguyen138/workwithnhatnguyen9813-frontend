import { Link } from 'react-router-dom'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import './_styles.scss'

export default function Aboutme() {
  return (
    <div className="Aboutme Section">
      <div className="SectionWidth">
        <img className="Portrait" src="/images/aboutme-portrait.jpg" alt="Aboutme Portrait" />
        <div className="Text">
          <p className="pHeading">Nhat K. "James" Nguyen <span>&#64;nhatnguyen9813</span></p>
          <p className="pContent">
            <p>Welcome to my website!</p>
            <p>My name is Nhat, but you can call me James. I'm currently working in Australia as a ReactJS frontend developer.</p>
            <p><AnchorLink href="#ContactInfo">&gt;&gt; Contact information</AnchorLink></p>
            <p><Link to="/aboutme">&gt;&gt; More about me</Link></p>
          </p>
        </div>
      </div>
      
    </div>
  )
}
