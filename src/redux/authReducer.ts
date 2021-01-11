import {securityAPI, authAPI} from '../api/api'
import {stopSubmit} from 'redux-form'
import {IsFetchingType} from './appReducer'

const SET_USER_DATA   = 'auth/SET_USER_DATA'
const TOGGLE_FETCHING = 'auth/TOGGLE_FETCHING'
const GET_CAPTCHA_URL = 'auth/GET_CAPTCHA_URL'

let initialState = {
	userId: null as number | null,
	email: null as string | null,
	login: null as string | null,
	isAuth: false,
	isFetching: true,
	captchaUrl: null as string | null
}

export type InitialStateType = typeof initialState

const authReducer = (state = initialState, action: any): InitialStateType => {
	switch(action.type) {
		case SET_USER_DATA:
		case GET_CAPTCHA_URL:
			return {...state, ...action.payload}

		case TOGGLE_FETCHING:
			return {...state, isFetching: action.isFetching}

		default:
			return state
	}
}

// ACTION CREATORS
type SetAuthUserDataPayloadType = {
	userId: number | null
	email: string | null
	login: string | null
	isAuth: boolean
}
type SetAuthUserDataType = {
	type: typeof SET_USER_DATA,
	payload: SetAuthUserDataPayloadType
}
type GetCaptchaUrlSuccessType = {
	type: typeof GET_CAPTCHA_URL
	payload: {captchaUrl: string}
}

export const setAuthUserData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean): SetAuthUserDataType =>
	({ type: SET_USER_DATA, payload: {userId, email, login, isAuth} })
export const setFetching = (isFetching: IsFetchingType) => ({ type: TOGGLE_FETCHING, isFetching })
export const getCaptchaUrlSuccess = (captchaUrl: string): GetCaptchaUrlSuccessType => ({ type: GET_CAPTCHA_URL,  payload: {captchaUrl} })

// THUNK CREATORS
export const getAuthUserData = () => async (dispatch: any) => {
	dispatch(setFetching(true))
	const response = await authAPI.me()
	dispatch(setFetching(false))
	if (response.resultCode === 0) {
		let {id, email, login} = response.data
		dispatch(setAuthUserData(id, email, login, true))
	}
}

export const login = (email: string, password: string, remember: boolean, captcha: string) => async (dispatch: any) => {
	dispatch(setFetching(true))
	const response = await authAPI.login(email, password, remember, captcha)
	dispatch(setFetching(false))
	if (response.data.resultCode === 0) {
		dispatch(getAuthUserData())
	} else {
		if (response.data.resultCode === 10) {
			dispatch(getCaptchaURL())
		}

		let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Unknown error'
		dispatch(stopSubmit('login', {_error: message}))
	}
}

export const getCaptchaURL = () => async (dispatch: any) => {
	dispatch(setFetching(true))
	const response = await securityAPI.getCaptchaUrl()
	dispatch(setFetching(false))
	const captchaUrl = response.data.url
	dispatch(getCaptchaUrlSuccess(captchaUrl))
}

export const logout = () => async (dispatch: any) => {
	dispatch(setFetching(true))
	const response = await authAPI.logout()
	dispatch(setFetching(false))
	if (response.data.resultCode === 0) {
		dispatch(setAuthUserData(null, null, null, false))
	}
}

export default authReducer
