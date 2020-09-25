import React from 'react'
import cl from './Header.module.css'

const Header = () => {
  return (
    <header className={ cl.header }>
      <img src="/logo3.png" alt="" className={ cl.logo }/>
      <div className={ cl.brand }>
        Faceboooook
      </div>
    </header>
  )
}

export default Header
