import React from 'react'
import cl from './Users.module.css'
import Button from '@material-ui/core/Button'
import Paginator from './Paginator'
import User from './User/User'

let Users = (props) => {

	const showMore = () => {
		props.onPageChanged(props.currentPage + 1)
	}

	return (
		<div className={cl.users}>
			<Paginator
				currentPage={props.currentPage} onPageChanged={props.onPageChanged}
				totalUsersCount={props.totalUsersCount} pageSize={props.pageSize}
			/>
			{
				props.users.map(u =>
					<User
						user={u} followInProgress={props.followInProgress}
						unfollow={props.unfollow} follow={props.follow} key={u.id}
					/>
				)
			}
			<div className={cl.showmore}>
				<Button
					variant="contained"
					color="primary"
					className={cl.button_more}
					size="large"
					onClick={showMore}
				>
					Show next
				</Button>
			</div>
		</div>
	)
}

export default Users
