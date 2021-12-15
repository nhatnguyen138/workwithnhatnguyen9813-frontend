import NavBtn from './NavBtn'
import './_styles.scss'

export default function Navbar() {
  return (
    <div id="Navbar">
      <NavBtn
        title="Portfolio"
        name="icon-portfolio"
        link="/portfolio"
      />
      <NavBtn
        title="Blog Posts"
        name="icon-blogposts"
        link="/blogposts"
      />
      <NavBtn
        title="About Me"
        name="icon-aboutme"
        link="/aboutme"
      />
    </div>
  )
}