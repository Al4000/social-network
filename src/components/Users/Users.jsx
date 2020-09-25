import React from 'react'
import cl from './Users.module.css'
import Button from '@material-ui/core/Button'

const Users = (props) => {

	if (props.users.length === 0) {
		props.setUsers([
				{
					id: 2,
					name: 'Victor',
					surname: 'K.',
					avatar: '/images/Screenshot_2.png',
					followed: true,
					status: 'Super',
					location: {country: 'Russia', city: 'Moscow'}
				},
				{
					id: 3,
					name: 'John',
					surname: 'Z.',
					avatar: '/images/Screenshot_3.png',
					followed: true,
					status: 'Perfect',
					location: {country: 'USA', city: 'New-York'}
				},
				{
					id: 4,
					name: 'Helena',
					surname: 'T.',
					avatar: '/images/helena.jpg',
					followed: true,
					status: 'Development',
					location: {country: 'China', city: 'Hong-Kong'}
				},
				{
					id: 5,
					name: 'Tony',
					surname: 'P.',
					avatar: '/images/Screenshot_5.png',
					followed: false,
					status: 'Inc',
					location: {country: 'Canada', city: 'Ottawa'}
				},
				{
					id: 6,
					name: 'Michael',
					surname: 'R.',
					avatar: '/images/Screenshot_6.png',
					followed: false,
					status: 'Ltd',
					location: {country: 'Mexico', city: 'Mexico'}
				}
			]
		)
	}
	return (
		<div className={cl.users}>
			{
				props.users.map(u =>
					<div key={u.id} className={cl.card}>
						<div className={cl.card__left}>
							<div className={cl.avatar}>
								<img src={u.avatar} alt=""/>
							</div>
							<Button
								variant   = "contained"
								color     = {u.followed ? 'secondary' : 'primary'}
								className = {cl.button}
								onClick   = {u.followed ? () => {props.unfollow(u.id)} : () => {props.follow(u.id)}}
							>
								{u.followed ? 'unfollow' : 'follow'}
							</Button>
						</div>
						<div className={cl.info}>
							<div>
								<div className={cl.name}>
									{u.name} {u.surname}
								</div>
								<div className={cl.status}>
									{u.status}
								</div>
							</div>
							<span className={cl.location}>
								{u.location.country }, {' '}
								{u.location.city}
							</span>
						</div>
					</div>
				)
			}
			<div className={cl.showmore}>
				<Button
					variant   = "contained"
					color     = "primary"
					className = {cl.button_more}
					size      = "large"
					// onClick   = {onFollow}
				>
					Show more
				</Button>
			</div>
		</div>
	)
}

export default Users