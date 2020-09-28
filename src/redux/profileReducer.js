const ADD_POST    = 'ADD_POST'
const CHANGE_TEXT = 'CHANGE_TEXT'
const SET_USERS_PROFILE = 'SET_USERS_PROFILE'
const TOGGLE_FETCHING = 'TOGGLE_FETCHING'


let initialState = {
  posts: [
    {id: 1, text: 'First post', likes: 2, dislikes: 0},
    {id: 2, text: 'Hi', likes: 23, dislikes: 1}
  ],
  newPostText: 'Whats new..',
  profile: null,
  isFetching: false
}

const profileReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_POST:
      let newPost = {
        id: 5,
        text: state.newPostText,
        likes: 0,
        dislikes: 0
      }
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: 'What`s new..'
      }

    case CHANGE_TEXT:
      return {
        ...state,
        newPostText: action.msg
      }

    case SET_USERS_PROFILE:
      return {
        ...state,
        profile: action.profile
      }

    case TOGGLE_FETCHING:
      return {...state, isFetching: action.isFetching}

    default:
      return state
  }    
}

export const addPost = () => ({ type: ADD_POST })
export const changeText = (text) => ({ type: CHANGE_TEXT, msg: text })
export const setUserProfile = (profile) => ({ type: SET_USERS_PROFILE, profile })
export const setFetching = (isFetching) => ({ type: TOGGLE_FETCHING, isFetching })


export default profileReducer
