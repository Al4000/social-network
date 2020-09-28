import cl from './Users.module.css'
import React from 'react'
import Button from '@material-ui/core/Button'
import {NavLink} from 'react-router-dom'

let Users = (props) => {
	let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
	let pages = []
	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i)
	}

	return (
		<div className={cl.users}>
			<div className={cl.pagination}>
				{
					pages.map(page =>
						<span
							key={page}
							className={`${props.currentPage === page && cl.pagi_active} ${cl.pagi}`}
							onClick = {() => props.onPageChanged(page)}
						>{page}</span>
					)
				}
			</div>
			{
				props.users.map(u =>
					<div key={u.id} className={cl.card}>
						<div className={cl.card__left}>
							<div className={cl.avatar}>
								{/*<img src={u.avatar} alt=""/>*/}
								<NavLink to={'/profile/' + u.id}>
									<img src={u.photos.small != null ? u.photos.small : '/avatar.png'} alt=""/>
								</NavLink>
							</div>
							<Button
								variant="contained"
								color={u.followed ? 'secondary' : 'primary'}
								className={cl.button}
								onClick={u.followed ? () => {
									props.unfollow(u.id)
								} : () => {
									props.follow(u.id)
								}}
							>
								{u.followed ? 'unfollow' : 'follow'}
							</Button>
						</div>
						<div className={cl.info}>
							<div>
								<div className={cl.name}>
									{u.name}
									{/*{u.surname}*/}
								</div>
								<div className={cl.status}>
									{u.status}
								</div>
							</div>
							{/*<span className={cl.location}>*/}
							{/*	{u.location.country }, {' '}*/}
							{/*	{u.location.city}*/}
							{/*</span>*/}
						</div>
					</div>
				)
			}
			<div className={cl.showmore}>
				<Button
					variant="contained"
					color="primary"
					className={cl.button_more}
					size="large"
					// onClick   = {showMore}
				>
					Show more
				</Button>
			</div>
		</div>
	)
}

export default Users
