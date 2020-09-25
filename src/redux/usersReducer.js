const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

let initialState = {
	users: [
		// {id: 2, name: 'Victor', surname: 'K.', avatar: '/images/Screenshot_2.png', followed: true, status: 'Super', location: { country: 'Russia', city: 'Moscow'} },
		// {id: 3, name: 'John', surname: 'Z.', avatar: '/images/Screenshot_3.png', followed: true, status: 'Perfect', location: { country: 'USA', city: 'New-York'} },
		// {id: 4, name: 'Helena', surname: 'T.', avatar: '/images/helena.jpg', followed: true, status: 'Development', location: { country: 'China', city: 'Hong-Kong'} },
		// {id: 5, name: 'Tony', surname: 'P.', avatar: '/images/Screenshot_5.png', followed: false, status: 'Inc', location: { country: 'Canada', city: 'Ottawa'} },
		// {id: 6, name: 'Michael', surname: 'R.', avatar: '/images/Screenshot_6.png', followed: false, status: 'Ltd', location: { country: 'Mexico', city: 'Mexico'} }
	]
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
			return {...state, users: [...state.users, ...action.users]}

		default:
			return state
	}
}


export const followAC = (userId) => ({ type: FOLLOW, userId })
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId })
export const setUsersAC = (users) => ({ type: SET_USERS, users })


export default usersReducer
