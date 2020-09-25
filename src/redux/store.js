import profileReducer from './profileReducer'
import messagesReducer from './messagesReducer'
import sidebarReducer from './sidebarReducer'


let store = {
  _state: {
    profilePage: {
      posts: [
        {id: 1, text: 'First post', likes: 2, dislikes: 0},
        {id: 2, text: 'Hi', likes: 23, dislikes: 1}
      ],
      newPostText: 'Whats new..'
    },
    messagesPage: {
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
    },
    sidebar: {
      friends: [
        {id: 2, name: 'Victor', avatar: '/images/Screenshot_2.png'},
        {id: 3, name: 'John', avatar: '/images/Screenshot_3.png'},
        {id: 4, name: 'Helena', avatar: '/images/helena.jpg'},
        {id: 5, name: 'Tony', avatar: '/images/Screenshot_5.png'},
        {id: 6, name: 'Michael', avatar: '/images/Screenshot_6.png'}
      ]
    }
  },
  _callSubscriber() {
    console.log('store changed')
  },

  getState() {
    return this._state
  },
  subscribe(observer) {
    this._callSubscriber = observer
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action)
    this._state.messagesPage = messagesReducer(this._state.messagesPage, action)
    this._state.sidebar = sidebarReducer(this._state.sidebar, action)

    this._callSubscriber(this._state)
  }
}


window.store = store

export default store
