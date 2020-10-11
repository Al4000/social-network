import {usersAPI} from '../api/api'

const SET_FRIENDS = 'SET_FRIENDS'
const SET_TOTAL_FRIENDS = 'SET_TOTAL_FRIENDS'

let initialState = {
	friends: [],
	totalFriendsCount: 0,
}

const sidebarReducer = (state = initialState, action) => {
	switch(action.type) {
		case SET_FRIENDS:
			return {...state, friends: action.friends}

		case SET_TOTAL_FRIENDS:
			return {...state, totalFriendsCount: action.friends}

		default:
			return state
	}
}

// ACTION CREATORS
export const setFriends = (friends) => ({ type: SET_FRIENDS, friends })
export const setTotalFriendsCount = (friends) => ({ type: SET_TOTAL_FRIENDS, friends })

// THUNK CREATORS
export const getFriends = () => async (dispatch) => {
	let response = await usersAPI.getFriends()
	let friends = response.items
	let shuffleArray = () => {
		let shuffled = friends.slice(0), i = friends.length, temp, index
		while (i--) {
			index = Math.floor((i + 1) * Math.random())
			temp = shuffled[index]
			shuffled[index] = shuffled[i]
			shuffled[i] = temp
		}
		return shuffled.slice(0, 3) // change random quantity friends here
	}

	let randomFriends = shuffleArray()

	dispatch(setFriends(randomFriends))
	dispatch(setTotalFriendsCount(response.totalCount))
}

export default sidebarReducer
