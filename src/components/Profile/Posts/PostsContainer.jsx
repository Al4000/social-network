import {addPost, toggleDislike, toggleLike} from '../../../redux/profileReducer'
import Posts from './Posts'
import {connect} from 'react-redux'

let mapStateToProps = (state, props) => {
	return {
		posts: state.profilePage.posts,
		profile: props.profile
	}
}

const PostsContainer = connect(mapStateToProps, {addPost, toggleLike, toggleDislike})(Posts)

export default PostsContainer
