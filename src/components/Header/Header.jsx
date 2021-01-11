import React from 'react'
import cl from './Header.module.css'
import logo from '../../static/178.gif'
import {NavLink} from 'react-router-dom'
import Button from '@material-ui/core/Button'

const Header = (props) => {
	return (
		<header className={cl.header}>
			<img src={logo} alt="" className={cl.logo}/>
			<div className={cl.brand}>
				vFacebooke
			</div>
			<div className={cl.login_block}>
				{(props.isAuth)
					? <div className={cl.button_wrap}>
						{props.login}
						<Button
							variant="contained"
							color="primary"
							className={cl.button_logout}
							onClick={props.logout}
						>
							Logout
						</Button>
					</div>
					: <NavLink to={'/login'}>
						<Button
							variant="contained"
							color="primary"
							className={cl.button}
						>
							Login
						</Button>
					</NavLink>
				}
			</div>
		</header>
	)
}

export default Header
