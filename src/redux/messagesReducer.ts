import avatar1 from '../static/my.png'
import avatar2 from '../static/Screenshot_2.png'
import avatar3 from '../static/Screenshot_3.png'
import avatar4 from '../static/helena.jpg'
import avatar5 from '../static/Screenshot_5.png'
import avatar6 from '../static/Screenshot_6.png'

const ADD_MESSAGE = 'ADD_MESSAGE'

type DialogType = {
  id: number,
  name: string,
  avatar: string
}

type MessagesType = {
  id: number,
  message: string,
  type: string
}

let initialState = {
  dialogs: [
    {id: 1, name: 'Alexander', avatar: avatar1},
    {id: 2, name: 'Victor', avatar: avatar2},
    {id: 3, name: 'John', avatar: avatar3},
    {id: 4, name: 'Helena', avatar: avatar4},
    {id: 5, name: 'Tony', avatar: avatar5},
    {id: 6, name: 'Michael', avatar: avatar6}
  ] as Array<DialogType>,
  messages: [
    {id: 1, message: 'Hi', type: 'incoming'},
    {id: 2, message: 'Hello', type: 'outcoming'},
    {id: 3, message: 'Ok!', type: 'incoming'},
    {id: 4, message: 'Good bye', type: 'outcoming'},
    {id: 5, message: '100%', type: 'incoming'},
    {id: 6, message: 'Yo', type: 'outcoming'}
  ] as Array<MessagesType>
}

export type InitialStateType = typeof initialState

const messagesReducer = (state = initialState, action: any): InitialStateType => {
  switch (action.type) {
    case ADD_MESSAGE:
      let newMessage = {
        id: 7,
        message: action.newMessageText,
        type: 'incoming'
      }
      return {
        ...state,
        messages: [...state.messages, newMessage]
      }

    default:
      return state
  }
}

type addMessageType = {
  type: typeof ADD_MESSAGE
  newMessageText: string
}

export const addMessage = (newMessageText: string): addMessageType => ({ type: ADD_MESSAGE, newMessageText })

export default messagesReducer
