import { isMobile } from '../../../hooks/isMobile'
import AMessageFromNhat from '../../../components/AMessageFromNhat'
import './_styles.scss'

export default function Message() {
  let message = ""
  isMobile() ?
    message = "Hi! According to my code, you might be using a mobile phone/tablet to see my site. I got you covered: the site is built 100% mobile-responsive."
    :
    message = "Hey there! Look, I know you probably don't see this via mobile phone, but try resizing the screen. This site looks neat in mobile view too."
  return (
    <div className="Section Message">
      <AMessageFromNhat
        content={message}
      />
    </div>
  )
}