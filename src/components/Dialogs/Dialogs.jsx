import React from 'react'
import cl from './Dialogs.module.css'
import Dialog from './Dialog/Dialog'
import Message from './Message/Message'
import Button from '@material-ui/core/Button'
// import TextField from '@material-ui/core/TextField'


const Dialogs = (props) => {
  let state = props.messagesPage

  let dialogElements = state.dialogs.map((dialog) => {
    return (
      <Dialog
        name   = {dialog.name}
        id     = {dialog.id}
        avatar = {dialog.avatar}
        key    = {dialog.id}
      />
    )
  })
  let messagesElements = state.messages.map((msg) => {
    return (
      <Message
        message = {msg.message}
        type    = {msg.type}
        key     = {msg.id}
      />
    )
  })
  let newMessageText = state.newMessageText
  let onAddMessage = () => {
    props.addMessage()
  }
  let onMessageInput = (e) => {
    let text = e.target.value
    props.messageInput(text)
  }

  return (
    <div>
      <div className={cl.dialogs}>
        <div className={cl.dialogs_items}>
          {dialogElements}
        </div>
        <div className={cl.messages}>
          {messagesElements}
        </div>
      </div>
      <div className={cl.input_fields}>
        {/* <TextField
          id="outlined-multiline-flexible"
          label="Your message.."
          // value=""
          // onChange=""
          variant="outlined"     
          className={cl.input_message}       
        />  */}
        <textarea 
          rows      = "3"
          onChange  = {onMessageInput}
          value     = {newMessageText}
          className = {cl.input_message}
        />
        <Button
          variant = "contained"
          color   = "primary"
          onClick = {onAddMessage}
        >
          Send
        </Button>
      </div>
    </div>
  )
}

export default Dialogs
