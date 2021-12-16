import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import useWindowSize from '../../hooks/useWindowSize'
import './_styles.scss'

import Navbar from '../Navbar'

export default function Header() {
  const { width } = useWindowSize()
  const navigate = useNavigate()
  const location = useLocation()
  const { pathname } = location
  useEffect(() => window.scrollTo(0,0), [location])

  const handleClick = () => {
    if (pathname==="/")
      window.scrollTo({top: 0, behavior: 'smooth'})
    else
      navigate("/")
  }

  return (
    <div id="Header">
      <div className="HeaderWidth">
        {width<768 ? <img className="SiteLogo" src="/logo192.png" alt="site-logo" onClick={handleClick} /> : <img className="SiteLogo" src="/logo-full.png" alt="site-logo" onClick={handleClick} />}
        <Navbar />
      </div>
    </div>
  )
}
