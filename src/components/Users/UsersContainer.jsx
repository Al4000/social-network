import React from 'react'
import {connect} from 'react-redux'
import {
	follow,
	setActivePage,
	setFetching,
	setTotalUsersCount,
	setUsers,
	unfollow
} from '../../redux/usersReducer'
import * as axios from 'axios'
import Users from './Users'
import Preloader from '../common/Preloader/Preloader'

class UsersContainer extends React.Component {

	componentDidMount() {
		this.props.setFetching(true)
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
			.then(response => {
				this.props.setUsers(response.data.items)
				this.props.setFetching(false)
				if (response.data.totalCount > 100) {
					this.props.setTotalUsersCount(100)
				} else {
					this.props.setTotalUsersCount(response.data.totalCount)
				}
			})
	}

	onPageChanged = (page) => {
		this.props.setFetching(true)
		this.props.setActivePage(page)
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
			.then(response => {
				this.props.setUsers(response.data.items)
				this.props.setFetching(false)
			})
	}

	render() {
		return (
			<>
				{
					this.props.isFetching
						? <Preloader />
						: <Users
								totalUsersCount={this.props.totalUsersCount}
								currentPage={this.props.currentPage}
								pageSize={this.props.pageSize}
								onPageChanged={this.onPageChanged}
								users={this.props.users}
								follow={this.props.follow}
								unfollow={this.props.unfollow}
							/>
				}
			</>
		)
	}
}

let mapStateToProps = (state) => {
	return {
		users: state.usersPage.users,
		pageSize: state.usersPage.pageSize,
		totalUsersCount: state.usersPage.totalUsersCount,
		currentPage: state.usersPage.currentPage,
		isFetching: state.usersPage.isFetching
	}
}

export default connect(mapStateToProps,
	{follow, unfollow, setUsers, setTotalUsersCount, setActivePage,	setFetching})(UsersContainer)
