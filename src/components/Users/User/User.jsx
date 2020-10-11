import React from 'react'
import cl from './../Users.module.css'
import {NavLink} from 'react-router-dom'
import Button from '@material-ui/core/Button'
import avatar from '../../../static/avatar.png'

let User = ({user, followInProgress, unfollow, follow}) => {
	return (
		<div className={cl.card}>
			<div className={cl.card__left}>
				<div className={cl.avatar}>
					<NavLink to={'/profile/' + user.id}>
						<img src={user.photos.small != null ? user.photos.small : avatar} alt=""/>
					</NavLink>
				</div>
				<Button
					variant="contained"
					color={user.followed ? 'secondary' : 'primary'}
					className={cl.button}
					disabled={followInProgress.some(id => id === user.id)}
					onClick={user.followed
						? () => {
							unfollow(user.id)
						} : () => {
							follow(user.id)
						}}
				>
					{user.followed ? 'unfollow' : 'follow'}
				</Button>
			</div>
			<div className={cl.info}>
				<div>
					<div className={cl.name}>
						{user.name}
					</div>
					<div className={cl.status}>
						{user.status}
					</div>
				</div>
			</div>
		</div>
	)
}

export default User
