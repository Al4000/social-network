let initialState = {
  friends: [
    {id: 2, name: 'Victor', avatar: '/images/Screenshot_2.png'},
    {id: 3, name: 'John', avatar: '/images/Screenshot_3.png'},
    {id: 4, name: 'Helena', avatar: '/images/helena.jpg'},
    {id: 5, name: 'Tony', avatar: '/images/Screenshot_5.png'},
    {id: 6, name: 'Michael', avatar: '/images/Screenshot_6.png'}
  ]
}

const sidebarReducer = (state = initialState, action) => {
  return state
}

export default sidebarReducer
