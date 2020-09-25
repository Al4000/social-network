const MESSAGE_INPUT = 'MESSAGE_INPUT'
const ADD_MESSAGE   = 'ADD_MESSAGE'

let initialState = {
  dialogs: [
    {id: 1, name: 'Alexander', avatar: '/images/my.png'},
    {id: 2, name: 'Victor', avatar: '/images/Screenshot_2.png'},
    {id: 3, name: 'John', avatar: '/images/Screenshot_3.png'},
    {id: 4, name: 'Helena', avatar: '/images/helena.jpg'},
    {id: 5, name: 'Tony', avatar: '/images/Screenshot_5.png'},
    {id: 6, name: 'Michael', avatar: '/images/Screenshot_6.png'}
  ],
  messages: [
    {id: 1, message: 'Hi', type: 'incoming'},
    {id: 2, message: 'Hello', type: 'outcoming'},
    {id: 3, message: 'Ok!', type: 'incoming'},
    {id: 4, message: 'Good bye', type: 'outcoming'},
    {id: 5, message: '100%', type: 'incoming'},
    {id: 6, message: 'Yo', type: 'outcoming'}
  ],
  newMessageText: 'Enter a message..'
}

const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      let newMessage = {
        id: 7,
        message: state.newMessageText,
        type: 'incoming'
      }
      return {
        ...state,
        messages: [...state.messages, newMessage],
        newMessageText: 'Enter a message..'
      }

    case MESSAGE_INPUT:
     return {
        ...state,
        newMessageText: action.msg
      }

    default:
      return state
  }
}

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE })
export const messageInputActionCreator = (text) => ({ type: MESSAGE_INPUT, msg: text })

export default messagesReducer
