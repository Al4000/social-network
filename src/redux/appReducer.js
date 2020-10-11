import {getAuthUserData} from './authReducer'

const SET_INITIALIZED = 'SET_INITIALIZED'
const TOGGLE_FETCHING = 'TOGGLE_FETCHING'

let initialState = {
	initialized: false,
	isFetching: true
}

const appReducer = (state = initialState, action) => {
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
export const setInitialingSuccess = () =>
	({ type: SET_INITIALIZED })
export const setFetching = (isFetching) => ({ type: TOGGLE_FETCHING, isFetching })


// THUNK CREATORS
export const initializeApp = () => (dispatch) => {
	dispatch(setFetching(true))
	let dispatchResult = dispatch(getAuthUserData())

	Promise.all([dispatchResult])
		.then(() => {
			dispatch(setInitialingSuccess())
			dispatch(setFetching(false))
	})
}

export default appReducer
