import './_styles.scss'

interface SocialIconProps {
  name: string,
  link: string
}

export default function SocialIcon(props:SocialIconProps) {
  const { name, link } = props
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <img className={"Unselectable SocialIcon " + name} src={`/images/icon-${name}.svg`} alt={"icon-"+name} />
    </a>
  )
}
