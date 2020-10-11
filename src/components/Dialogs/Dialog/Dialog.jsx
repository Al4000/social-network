import React from 'react'
import cl from './Dialog.module.css'
import { NavLink } from 'react-router-dom'

const Dialog = (props) => {
  return (
    <div className={cl.dialog}>
      <NavLink to={"/dialogs/" + props.id} className={cl.dialog_link}>
        <div className={cl.dialog_avatar}>
          <img src={props.avatar} alt=""/>
        </div>
        { props.name }
      </NavLink>
    </div>
  )
}

export default Dialog
