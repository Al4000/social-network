import {profileAPI} from '../api/api'

const ADD_POST          = 'ADD_POST'
const SET_USERS_PROFILE = 'SET_USERS_PROFILE'
const TOGGLE_FETCHING   = 'TOGGLE_FETCHING'
const SET_STATUS        = 'SET_STATUS'
const DELETE_POST       = 'DELETE_POST'
const TOGGLE_LIKE       = 'TOGGLE_LIKE'
const TOGGLE_DISLIKE    = 'TOGGLE_DISLIKE'

let initialState = {
	posts: [
		{id: 1, text: 'First post', likes: 2, dislikes: 0, like: false, dislike: false},
		{id: 2, text: 'Hi', likes: 23, dislikes: 1, like: false, dislike: false}
	],
	profile: null,
	isFetching: true
}

const profileReducer = (state = initialState, action) => {
	switch(action.type) {
		case ADD_POST:
			let newPost = {
				id: 5,
				text: action.newPostText,
				likes: 0,
				dislikes: 0,
				like: false,
				dislike: false
			}
			return {
				...state,
				posts: [...state.posts, newPost]
			}

		case SET_STATUS:
			return {
				...state,
				status: action.status
			}

		case SET_USERS_PROFILE:
			return {
				...state,
				profile: action.profile
			}

		case TOGGLE_FETCHING:
			return {...state, isFetching: action.isFetching}

		case DELETE_POST:
			return {
				...state,
				posts: state.posts.filter(p =>
					p.id !== action.id
				)
			}

		case TOGGLE_LIKE:
			return {
				...state,
				posts: state.posts.map(p => {
					if (p.id === action.id) {
						if (p.like) {
							return {
								...p,
								like: false,
								likes: p.likes - 1
							}
						} else {
							return {
								...p,
								like: true,
								dislike: false,
								likes: p.likes + 1,
								dislikes: p.dislike ? p.dislikes - 1 : p.dislikes
							}
						}
					}
					return p
				})
			}

		case TOGGLE_DISLIKE:
			return {
				...state,
				posts: state.posts.map(p => {
					if (p.id === action.id) {
						if (p.dislike) {
							return {
								...p,
								dislike: false,
								dislikes: p.dislikes - 1
							}
						} else {
							return {
								...p,
								like: false,
								dislike: true,
								dislikes: p.dislikes + 1,
								likes: p.like ? p.likes - 1 : p.likes
							}
						}
					}
					return p
				})
			}

		default:
			return state
	}
}

// ACTION CREATORS
export const addPost = (newPostText) => ({ type: ADD_POST, newPostText })
export const deletePost = (id) => ({ type: DELETE_POST, id })
export const setUserProfile = (profile) => ({ type: SET_USERS_PROFILE, profile })
export const setFetching = (isFetching) => ({ type: TOGGLE_FETCHING, isFetching })
export const setStatus = (status) => ({ type: SET_STATUS, status })
export const toggleLike = (id) => ({ type: TOGGLE_LIKE, id })
export const toggleDislike = (id) => ({ type: TOGGLE_DISLIKE, id })

// THUNK CREATORS
export const getUserProfile = (userId) =>  async (dispatch) => {
	dispatch(setFetching(true))
	let response = await profileAPI.getUserProfile(userId)
	dispatch(setUserProfile(response))
	dispatch(setFetching(false))
}

export const getUserStatus = (userId) => async (dispatch) => {
	let response = await profileAPI.getStatus(userId)
	dispatch(setStatus(response))
}

export const updateStatus = (status) => async (dispatch) => {
	let response = await profileAPI.updateStatus(status)
	if (response.data.resultCode === 0) {
		dispatch(setStatus(status))
	}
}

export default profileReducer
