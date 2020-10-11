import React from 'react'
import cl from './Message.module.css'

const Message = (props) => {
  let typeClass = props.type === 'incoming' ? cl.message_incoming : cl.message_outcoming
  
  return (
    <div className={`${cl.message} ${typeClass}`}>
      { props.message }
    </div>
  )
}

export default Message
