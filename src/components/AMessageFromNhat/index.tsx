import ScrollAnimation from 'react-animate-on-scroll'
import './_styles.scss'

interface MessageProps {
  content: string
}

export default function AMessageFromNhat(props:MessageProps) {
  const { content } = props
  return (
    <ScrollAnimation className="AMessageFromNhat" animateIn="tada">
      <div className="Unselectable mHeading">
        <img className="Image" src="/images/icon-chatbox.svg" alt="message" />
        <span>A message from Nhat</span>
      </div>
      <div className="mContent">{content}</div>
    </ScrollAnimation>
  )
}
