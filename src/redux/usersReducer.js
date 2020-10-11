import {usersAPI} from '../api/api'

const FOLLOW    = 'FOLLOW'
const UNFOLLOW  = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_TOTAL_USERS = 'SET_TOTAL_USERS'
const SET_ACTIVE_PAGE = 'SET_ACTIVE_PAGE'
const TOGGLE_FETCHING = 'TOGGLE_FETCHING'
const FOLLOW_IN_PROGRESS = 'FOLLOW_IN_PROGRESS'

let initialState = {
	users: [],
	pageSize: 5,
	totalUsersCount: 0,
	currentPage: 1,
	isFetching: true,
	followInProgress: []
}

const usersReducer = (state = initialState, action) => {
	switch(action.type) {
		case FOLLOW:
			return {
				...state,
				users: state.users.map(u => {
					if (u.id === action.userId) {
						return {...u, followed: true}
					}
					return u
				})
			}

		case UNFOLLOW:
			return {
				...state,
				users: state.users.map(u => {
					if (u.id === action.userId) {
						return {...u, followed: false}
					}
					return u
				})
			}

		case SET_USERS:
			return {...state, users: action.users}

		case SET_TOTAL_USERS:
			return {...state, totalUsersCount: action.users}

		case SET_ACTIVE_PAGE:
			return {...state, currentPage: action.page}

		case TOGGLE_FETCHING:
			return {...state, isFetching: action.isFetching}

		case FOLLOW_IN_PROGRESS:
			return {...state, followInProgress: action.isFetching
					? [...state.followInProgress, action.userId]
					: state.followInProgress.filter(id => id !== action.userId)
			}

		default:
			return state
	}
}


// ACTION CREATORS
export const followSuccess = (userId) => ({ type: FOLLOW, userId })
export const unfollowSuccess = (userId) => ({ type: UNFOLLOW, userId })
export const setUsers = (users) => ({ type: SET_USERS, users })
export const setTotalUsersCount = (users) => ({ type: SET_TOTAL_USERS, users })
export const setActivePage = (page) => ({ type: SET_ACTIVE_PAGE, page })
export const setFetching = (isFetching) => ({ type: TOGGLE_FETCHING, isFetching })
export const toggleFollow = (isFetching, userId) => ({ type: FOLLOW_IN_PROGRESS, isFetching, userId })

// THUNK CREATORS
export const requestUsers = (currentPage, pageSize) => async (dispatch) => {
	dispatch(setFetching(true))
	dispatch(setActivePage(currentPage))

	let response = await usersAPI.getUsers(currentPage, pageSize)
	dispatch(setUsers(response.items))
	dispatch(setFetching(false))
	dispatch(setTotalUsersCount(response.totalCount))
}


const followToggle = async (dispatch, id, apiMethod, actionCreator) => {
	dispatch(toggleFollow(true, id))
	let response = await apiMethod(id)
	if (response.data.resultCode === 0) {
		dispatch(actionCreator(id))
	}
	dispatch(toggleFollow(false, id))
}
export const follow = (id) => (dispatch) => {
	followToggle(dispatch, id, usersAPI.follow.bind(id), followSuccess)
}
export const unfollow = (id) => (dispatch) => {
	followToggle(dispatch, id, usersAPI.unfollow.bind(id), unfollowSuccess)
}

export default usersReducer
