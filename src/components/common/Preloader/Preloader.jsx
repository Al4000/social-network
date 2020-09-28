import React from 'react'
import logo from '../../../static/preloader.gif'
import cl from './Preloader.module.css'

const Preloader = () => {
	return (
		<div className={cl.preloader_wrap}>
			<img src={logo} alt="" />
		</div>
	)
}

export default Preloader