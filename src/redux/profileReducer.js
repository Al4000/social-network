const ADD_POST    = 'ADD_POST'
const CHANGE_TEXT = 'CHANGE_TEXT'

let initialState = {
  posts: [
    {id: 1, text: 'First post', likes: 2, dislikes: 0},
    {id: 2, text: 'Hi', likes: 23, dislikes: 1}
  ],
  newPostText: 'Whats new..'
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

    default:
      return state
  }    
}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const changeTextActionCreator = (text) => ({ type: CHANGE_TEXT, msg: text })

export default profileReducer
