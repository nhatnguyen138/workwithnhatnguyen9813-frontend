import { Link } from 'react-router-dom'
import SocialIcon from '../SocialIcon'
import './_styles.scss'

export default function Footer() {
  return (
    <div id="Footer">
      <div className="FooterWidth">
        <div className="Sections">
          <div className="Section Menu">
            <h3>Menu</h3>
            <p><Link to="/">Home</Link></p>
            <p><Link to="/portfolio">Portfolio</Link></p>
            <p><Link to="/articles">Articles</Link></p>
            <p><Link to="/aboutme">About Me</Link></p>
          </div>
          <div className="Section Contactme" id="ContactInfo">
            <h3>Contact Me</h3>
            <p>Nhat K. "James" Nguyen, Full-Stack Software Engineer | Frontend ReactJS Web Developer</p>
            <div className="Socials">
              <SocialIcon
                name="linkedin"
                link="https://www.linkedin.com/in/nhatnguyen9813/"
              />
              <SocialIcon
                name="github"
                link="https://www.github.com/nhatnguyen9813/"
              />
              <SocialIcon
                name="mail"
                link="mailto://kimnhat98@gmail.com/"
              />
            </div>
            <p>📱 (+61) 4 1685 1646</p>
          </div>
        </div>
        <div className="Section Copyright">Work with &#64;nhatnguyen9813 &copy; 2022</div>
      </div>
    </div>
  )
}
