import profileReducer, {addPost, deletePost} from './profileReducer'

let state = {
	posts: [
		{id: 1, text: 'First post', likes: 2, dislikes: 0},
		{id: 2, text: 'Hi', likes: 23, dislikes: 1}
	],
	profile: null,
	isFetching: true,
	status: ''
}

test('Add new post', () => {
	// test
	let action = addPost('new post')
	// action
	let newState = profileReducer(state, action)
	// output
	expect(newState.posts.length).toBe(3)
})

test('text of post', () => {
	// test
	let action = addPost('new post')

	// action
	let newState = profileReducer(state, action)

	// output
	expect(newState.posts[2].text).toBe('new post')
})

test('delete post', () => {
	// test
	let action = deletePost(2)
	// action
	let newState = profileReducer(state, action)
	// output
	expect(newState.posts.length).toBe(1)
})
