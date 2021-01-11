import React from 'react'
import {connect} from 'react-redux'
import {
	follow, requestUsers, setActivePage, toggleFollow, unfollow
} from '../../redux/usersReducer'
import Users from './Users'
import Preloader from '../common/Preloader/Preloader'
import {withAuthRedirect} from '../../hoc/withAuthRedirect'
import {compose} from 'redux'
import {
	getCurrentPage, getCurrentPagiNumber, getFollowInProgress, getIsFetching,
	getPageSize, getTotalUsersCount, getUsersReselect
} from '../../redux/usersSelectors'

class UsersContainer extends React.Component {

	componentDidMount() {
		this.props.requestUsers(this.props.currentPage, this.props.pageSize, this.props.currentPagiNumber)
	}

	onPageChanged = (page, pagiNumber) => {
		this.props.requestUsers(page, this.props.pageSize, pagiNumber)
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
								currentPagiNumber={this.props.currentPagiNumber}
								onPageChanged={this.onPageChanged}
								users={this.props.users}
								follow={this.props.follow}
								unfollow={this.props.unfollow}
								followInProgress={this.props.followInProgress}
							/>
				}
			</>
		)
	}
}

let mapStateToProps = (state) => {
	return {
		users: getUsersReselect(state),
		pageSize: getPageSize(state),
		totalUsersCount: getTotalUsersCount(state),
		currentPage: getCurrentPage(state),
		currentPagiNumber: getCurrentPagiNumber(state),
		isFetching: getIsFetching(state),
		followInProgress: getFollowInProgress(state)
	}
}

export default compose(
	connect(mapStateToProps,
		{follow, unfollow, setActivePage,	toggleFollow, requestUsers}),
	withAuthRedirect
)(UsersContainer)
