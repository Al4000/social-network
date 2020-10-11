import {authAPI} from '../api/api'
import {stopSubmit} from 'redux-form'

const SET_USER_DATA   = 'auth/SET_USER_DATA'
const TOGGLE_FETCHING = 'TOGGLE_FETCHING'

let initialState = {
	userId: null,
	email: null,
	login: null,
	isAuth: false,
	isFetching: true
}

const authReducer = (state = initialState, action) => {
	switch(action.type) {
		case SET_USER_DATA:
			return {...state, ...action.payload}

		case TOGGLE_FETCHING:
			return {...state, isFetching: action.isFetching}

		default:
			return state
	}
}

// ACTION CREATORS
export const setAuthUserData = (userId, email, login, isAuth) =>
	({ type: SET_USER_DATA, payload: {userId, email, login, isAuth} })
export const setFetching = (isFetching) => ({ type: TOGGLE_FETCHING, isFetching })

// THUNK CREATORS
export const getAuthUserData = () => async (dispatch) => {
	dispatch(setFetching(true))
	let response = await authAPI.me()
	dispatch(setFetching(false))
	if (response.resultCode === 0) {
		let {id, email, login} = response.data
		dispatch(setAuthUserData(id, email, login, true))
	}
}

export const login = (email, password, remember) => async (dispatch) => {
	dispatch(setFetching(true))
	let response = await authAPI.login(email, password, remember)
	dispatch(setFetching(false))
	if (response.data.resultCode === 0) {
		dispatch(getAuthUserData())
	} else {
		let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Unknown error'
		dispatch(stopSubmit('login', {_error: message}))
	}
}

export const logout = () => async (dispatch) => {
	dispatch(setFetching(true))

	let response = await authAPI.logout()
	dispatch(setFetching(false))
	if (response.data.resultCode === 0) {
		dispatch(setAuthUserData(null, null, null, false))
	}
}

export default authReducer
