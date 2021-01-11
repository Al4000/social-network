import {usersAPI} from '../api/api'
import {UserType} from '../types/types'

const FOLLOW    = 'FOLLOW'
const UNFOLLOW  = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_TOTAL_USERS = 'SET_TOTAL_USERS'
const SET_ACTIVE_PAGE = 'SET_ACTIVE_PAGE'
const TOGGLE_FETCHING = 'TOGGLE_FETCHING'
const FOLLOW_IN_PROGRESS = 'FOLLOW_IN_PROGRESS'
const SET_ACTIVE_PAGI_NUMBER = 'SET_ACTIVE_PAGI_NUMBER'

let initialState = {
	users: [] as Array<UserType>,
	pageSize: 5,
	totalUsersCount: 0,
	currentPage: 1,
	currentPagiNumber: 1,
	isFetching: true,
	followInProgress: [] as Array<number> // array of users id
}

type InitialStateType = typeof initialState

const usersReducer = (state = initialState, action: any): InitialStateType => {
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

		case SET_ACTIVE_PAGI_NUMBER:
			return {...state, currentPagiNumber: action.page}

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
type FollowSuccessType = {
	type: typeof FOLLOW
	userId: number
}
export const followSuccess = (userId: number): FollowSuccessType => ({ type: FOLLOW, userId })
type UnfollowSuccessType = {
	type: typeof UNFOLLOW
	userId: number
}
export const unfollowSuccess = (userId: number): UnfollowSuccessType => ({ type: UNFOLLOW, userId })
type SetUsersType = {
	type: typeof SET_USERS
	users: Array<UserType>
}
export const setUsers = (users: Array<UserType>): SetUsersType => ({ type: SET_USERS, users })
type SetTotalUsersCountType = {
	type: typeof SET_TOTAL_USERS
	users: number
}
export const setTotalUsersCount = (users: number): SetTotalUsersCountType => ({ type: SET_TOTAL_USERS, users })
type SetActivePageType = {
	type: typeof SET_ACTIVE_PAGE
	page: number
}
export const setActivePage = (page: number): SetActivePageType => ({ type: SET_ACTIVE_PAGE, page })
type SetActivePagiNumberType = {
	type: typeof SET_ACTIVE_PAGI_NUMBER
	page: number
}
export const setActivePagiNumber = (page: number): SetActivePagiNumberType => ({ type: SET_ACTIVE_PAGI_NUMBER, page })
type SetFetchingType = {
	type: typeof TOGGLE_FETCHING
	isFetching: boolean
}
export const setFetching = (isFetching: boolean): SetFetchingType => ({ type: TOGGLE_FETCHING, isFetching })
type ToggleFollowType = {
	type: typeof FOLLOW_IN_PROGRESS
	isFetching: boolean
	userId: number
}
export const toggleFollow = (isFetching: boolean, userId: number): ToggleFollowType => ({ type: FOLLOW_IN_PROGRESS, isFetching, userId })

// THUNK CREATORS
export const requestUsers = (currentPage: number, pageSize: number, currentPagiNumber: number) => async (dispatch: any) => {
	dispatch(setFetching(true))
	dispatch(setActivePage(currentPage))
	dispatch(setActivePagiNumber(currentPagiNumber))

	let response = await usersAPI.getUsers(currentPage, pageSize)
	dispatch(setUsers(response.items))
	dispatch(setFetching(false))
	dispatch(setTotalUsersCount(response.totalCount))
}

const followToggle = async (dispatch: any, id: number, apiMethod: any, actionCreator: any) => {
	dispatch(toggleFollow(true, id))
	let response = await apiMethod(id)
	if (response.data.resultCode === 0) {
		dispatch(actionCreator(id))
	}
	dispatch(toggleFollow(false, id))
}
export const follow = (id: number) => (dispatch: any) => {
	followToggle(dispatch, id, usersAPI.follow.bind(id), followSuccess)
}
export const unfollow = (id: number) => (dispatch:any) => {
	followToggle(dispatch, id, usersAPI.unfollow.bind(id), unfollowSuccess)
}

export default usersReducer
