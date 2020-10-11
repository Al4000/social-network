import React from 'react'
import cl from './Navbar.module.css'
import {NavLink} from 'react-router-dom'
import avatar from '../../static/avatar.png'

const Navbar = (props) => {
	let friendsElements = props.sidebar.friends.map((fr) => {
		return (
			<li className={cl.friends_item} key={fr.id}>
				<div className={cl.friends_avatar}>
					<img src={(!fr || fr.photos.small === null) ? avatar : fr.photos.small} alt=""/>
				</div>
				<div className={cl.friends_name}>
					{fr.name}
				</div>
			</li>
		)
	})

	return (
		<nav className={cl.nav}>
			<ul className={cl.nav__ul}>
				<li className={`${cl.nav__li} ${cl.active}`}>
					<NavLink
						to="/profile"
						activeClassName={cl.active}
					>
						Profile
					</NavLink>
				</li>
				<li className={cl.nav__li}>
					<NavLink
						to="/dialogs"
						activeClassName={cl.active}
					>
						Messages
					</NavLink>
				</li>
				<li className={cl.nav__li}>
					<NavLink
						to="/news"
						activeClassName={cl.active}
					>
						News
					</NavLink>
				</li>
				<li className={cl.nav__li}>
					<NavLink
						to="/music"
						activeClassName={cl.active}
					>
						Music
					</NavLink>
				</li>
				<li className={cl.nav__li}>
					<NavLink
						to="/settings"
						activeClassName={cl.active}
					>
						Settings
					</NavLink>
				</li>
				<li className={`${cl.nav__li} ${cl.nav__li_users}`}>
					<NavLink
						to="/users"
						activeClassName={cl.active}
					>
						Users
					</NavLink>
				</li>
			</ul>
			<div className={cl.friends}>
				<h4 className={cl.friends_title}>Friends <span className={cl.friends_count}>{props.sidebar.totalFriendsCount}</span></h4>
				<ul className={cl.friends_list}>
					{friendsElements}
				</ul>
			</div>
		</nav>
	)
}

export default Navbar
