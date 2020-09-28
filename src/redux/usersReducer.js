const FOLLOW    = 'FOLLOW'
const UNFOLLOW  = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_TOTAL_USERS = 'SET_TOTAL_USERS'
const SET_ACTIVE_PAGE = 'SET_ACTIVE_PAGE'
const TOGGLE_FETCHING = 'TOGGLE_FETCHING'


let initialState = {
	users: [],
	pageSize: 5,
	totalUsersCount: 0,
	currentPage: 1,
	isFetching: false
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

		default:
			return state
	}
}

// ACTION CREATORS
export const follow = (userId) => ({ type: FOLLOW, userId })
export const unfollow = (userId) => ({ type: UNFOLLOW, userId })
export const setUsers = (users) => ({ type: SET_USERS, users })
export const setTotalUsersCount = (users) => ({ type: SET_TOTAL_USERS, users })
export const setActivePage = (page) => ({ type: SET_ACTIVE_PAGE, page })
export const setFetching = (isFetching) => ({ type: TOGGLE_FETCHING, isFetching })

export default usersReducer
