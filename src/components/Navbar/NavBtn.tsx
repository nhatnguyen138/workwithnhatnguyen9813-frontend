import { useNavigate } from 'react-router-dom'

interface NavBtnProps {
  title: string,
  name: string,
  link: string
}

export default function NavBtn(props:NavBtnProps) {
  const { title, name, link } = props
  const navigate = useNavigate()
  const pathname = window.location.pathname
  let BtnClass = "NavBtn"
  if (pathname.startsWith(link)) {
    BtnClass+=" Selected"
  }

  const handleClick = (link:string) => {
    if (pathname.startsWith(link))
      window.scrollTo({top: 0, behavior: 'smooth'})
    else
      navigate(link)
  }
  return (
    <div className={BtnClass} onClick={() => handleClick(link)}>
      <img className="NavIcon" src={`/images/${name}.svg`} alt={name} />
      <span>{title}</span>
    </div>
  )
}
