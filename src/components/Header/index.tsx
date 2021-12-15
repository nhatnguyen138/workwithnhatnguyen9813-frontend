import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import './_styles.scss'

import Navbar from '../Navbar'

export default function Header() {
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
        <p onClick={handleClick}>LOGO</p>
        <Navbar />
      </div>
    </div>
  )
}
