import {createSelector} from 'reselect'

export const getUsers = (state) => {
	return state.usersPage.users
}
export const getIsFetching = (state) => {
	return state.usersPage.isFetching
}
export const getUsersReselect = createSelector(getUsers,
	(users) => {
	return users
})

export const getPageSize = (state) => {
	return state.usersPage.pageSize
}

export const getTotalUsersCount = (state) => {
	return state.usersPage.totalUsersCount
}

export const getCurrentPage = (state) => {
	return state.usersPage.currentPage
}

export const getCurrentPagiNumber = (state) => {
	return state.usersPage.currentPagiNumber
}

export const getFollowInProgress = (state) => {
	return state.usersPage.followInProgress
}
