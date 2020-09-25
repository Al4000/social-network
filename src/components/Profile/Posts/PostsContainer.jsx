import {addPostActionCreator, changeTextActionCreator} from '../../../redux/profileReducer'
import Posts from './Posts'
import {connect} from 'react-redux'

let mapStateToProps = (state) => {
	return {
		posts: state.profilePage.posts,
		newPostText: state.profilePage.newPostText
	}
}

let mapDispatchToProps = (dispatch) => {
	return {
		changeText: (text) => {
			let action = changeTextActionCreator(text)
			dispatch(action)
		},
		addPost: () => {
			dispatch(addPostActionCreator())
		}
	}
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts)

export default PostsContainer
