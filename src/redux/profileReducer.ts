import {profileAPI} from '../api/api'
import {stopSubmit} from 'redux-form'
import {PhotosType, PostType, ProfileType} from '../types/types'

const ADD_POST          = 'ADD_POST'
const SET_USERS_PROFILE = 'SET_USERS_PROFILE'
const TOGGLE_FETCHING   = 'TOGGLE_FETCHING'
const SET_STATUS        = 'SET_STATUS'
const DELETE_POST       = 'DELETE_POST'
const TOGGLE_LIKE       = 'TOGGLE_LIKE'
const TOGGLE_DISLIKE    = 'TOGGLE_DISLIKE'
const SAVE_AVATAR       = 'SAVE_AVATAR'

let initialState = {
	posts: [
		{id: 1, text: 'First post', likes: 2, dislikes: 0, like: false, dislike: false},
		{id: 2, text: 'Hi', likes: 23, dislikes: 1, like: false, dislike: false}
	] as Array<PostType>,
	profile: null as ProfileType | null,
	status: '',
	isFetching: true,
	newPostText: ''
}
export type InitialStateType = typeof initialState

const profileReducer = (state = initialState, action: any): InitialStateType => {
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
				posts: [...state.posts, newPost],
				newPostText: ''
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

		case SAVE_AVATAR:
			return {
				...state,
				profile: {...state.profile, photos: action.photos} as ProfileType
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

type AddPostType = {
	type: typeof ADD_POST
	newPostText: string
}
type SetUserProfileType = {
	type: typeof SET_USERS_PROFILE
	profile: ProfileType
}
type SetStatusType = {
	type: typeof SET_STATUS
	status: string
}
type DeletePostType = {
	type: typeof DELETE_POST
	id: number
}
type SaveAvatarSuccessType = {
	type: typeof SAVE_AVATAR
	photos: PhotosType
}
type ToggleLikeType = {
	type: typeof TOGGLE_LIKE
	id: number
}
type ToggleDislikeType = {
	type: typeof TOGGLE_DISLIKE
	id: number
}
type SetFetchingType = {
	type: typeof TOGGLE_FETCHING
	isFetching: boolean
}

// ACTION CREATORS
export const addPost = (newPostText: string): AddPostType => ({ type: ADD_POST, newPostText })
export const deletePost = (id: number): DeletePostType => ({ type: DELETE_POST, id })
export const setUserProfile = (profile: ProfileType): SetUserProfileType => ({ type: SET_USERS_PROFILE, profile })
export const setFetching = (isFetching: boolean): SetFetchingType => ({ type: TOGGLE_FETCHING, isFetching })
export const setStatus = (status: string): SetStatusType => ({ type: SET_STATUS, status })
export const toggleLike = (id: number): ToggleLikeType => ({ type: TOGGLE_LIKE, id })
export const toggleDislike = (id: number): ToggleDislikeType => ({ type: TOGGLE_DISLIKE, id })
export const saveAvatarSuccess = (photos: PhotosType): SaveAvatarSuccessType => ({ type: SAVE_AVATAR, photos })

// THUNK CREATORS
export const getUserProfile = (userId: number) =>  async (dispatch: any) => {
	dispatch(setFetching(true))
	const response = await profileAPI.getUserProfile(userId)
	dispatch(setUserProfile(response))
	dispatch(setFetching(false))
}

export const getUserStatus = (userId: number) => async (dispatch: any) => {
	const response = await profileAPI.getStatus(userId)
	dispatch(setStatus(response))
}

export const updateStatus = (status: string) => async (dispatch: any) => {
	try {
		const response = await profileAPI.updateStatus(status)
		if (response.data.resultCode === 0) {
			dispatch(setStatus(status))
		}
	} catch(error) {

	}
}

export const uploadAvatar = (file: any) => async (dispatch: any) => {
	const response = await profileAPI.uploadAvatar(file)
	if (response.data.resultCode === 0) {
		dispatch(saveAvatarSuccess(response.data.data.photos))
	}
}

export const updateProfile = (profile: ProfileType) => async (dispatch: any, getState: any) => {
	const userId = getState().auth.userId
	const response = await profileAPI.updateProfile(profile)
	if (response.data.resultCode === 0) {
		dispatch(getUserProfile(userId))
	} else {
		dispatch(stopSubmit('profile', {_error: response.data.messages[0]}))
		return Promise.reject(response.data.messages[0])
	}
}

export default profileReducer
