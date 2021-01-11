import {getAuthUserData} from './authReducer'

const SET_INITIALIZED = 'SET_INITIALIZED'
const TOGGLE_FETCHING = 'TOGGLE_FETCHING'

export type InitialStateType = {
	isFetching: boolean,
	initialized: boolean
}
type InitializedSuccessActionType = {
	type: typeof SET_INITIALIZED
}
export type IsFetchingType = boolean
let initialState: InitialStateType = {
	initialized: false,
	isFetching: true
}

const appReducer = (state = initialState, action: any): InitialStateType => {
	switch(action.type) {
		case SET_INITIALIZED:
			return {...state, initialized: true}

		case TOGGLE_FETCHING:
			return {...state, isFetching: action.isFetching}

		default:
			return state
	}
}

// ACTION CREATORS
export const setInitialingSuccess = (): InitializedSuccessActionType =>
	({ type: SET_INITIALIZED })
export const setFetching = (isFetching: IsFetchingType) => ({ type: TOGGLE_FETCHING, isFetching })


// THUNK CREATORS
export const initializeApp = () => (dispatch: any) => {
	dispatch(setFetching(true))
	let dispatchResult = dispatch(getAuthUserData())

	Promise.all([dispatchResult])
		.then(() => {
			dispatch(setInitialingSuccess())
			dispatch(setFetching(false))
	})
}

export default appReducer
