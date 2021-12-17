import React from 'react'
import './_styles.scss'

interface MessageProps {
  content: string
}

export default function AMessageFromNhat(props:MessageProps) {
  const { content } = props
  return (
    <div className="AMessageFromNhat">
      <div className="Unselectable mHeading">
        <img className="Image" src="/images/icon-chatbox.svg" alt="message" />
        <span>A message from Nhat</span>
      </div>
      <div className="mContent">{content}</div>
    </div>
  )
}
