import React from 'react'
import cl from './Header.module.css'
import logo from '../../static/facebook.png'

const Header = () => {
  return (
    <header className={cl.header}>
      <img src={logo} alt="" className={cl.logo}/>
      <div className={cl.brand}>
        Faceboooook
      </div>
    </header>
  )
}

export default Header
