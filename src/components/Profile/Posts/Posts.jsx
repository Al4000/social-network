import React from 'react'
import cl from './Posts.module.css'
import Post from './Post/Post'
import Button from '@material-ui/core/Button'
import {Field, reduxForm} from 'redux-form'
import TextField from '@material-ui/core/TextField'
import {PostAdd} from '@material-ui/icons'

const Posts = React.memo(props => {
	let addPost = (values) => {
		props.addPost(values.newPostText)
	}

	let postsElements = [...props.posts].reverse().map((post) => {
		return (
			<Post
				id={post.id}
				text={post.text}
				likes={post.likes}
				dislikes={post.dislikes}
				key={post.id}
				profile={props.profile}
				like={post.like}
				dislike={post.dislike}
				toggleLike={props.toggleLike}
				toggleDislike={props.toggleDislike}
			/>
		)
	})

	return (
		<div className={cl.content__posts}>
			<PostReduxForm onSubmit={addPost}/>
			<div className={cl.posts}>
				<h4 className={cl.posts__title}>My posts</h4>
				{postsElements}
			</div>
		</div>
	)
})

const validate = values => {
	const maxLength = 100
	const errors = {}
	const requiredFields = []
	requiredFields.forEach(field => {
		if (!values[field]) {
			errors[field] = 'Required'
		}
		if (values[field] && values[field].length > maxLength) {
			errors[field] = `Max length is ${maxLength} symbols`
		}
	})
	return errors
}

const renderTextField =
	({
		 label,
		 input,
		 meta: {touched, invalid, error},
		 ...custom
	 }) => (
		<TextField
			id="outlined-multiline-flexible"
			label={label}
			placeholder={label}
			error={touched && invalid}
			helperText={touched && error}
			variant="outlined"
			className={cl.textfield}
			{...input}
			{...custom}
		/>
	)

const PostForm = (props) => {
	return (
		<form onSubmit={props.handleSubmit}>
			<div className={cl.textarea}>
				<Field
					rows="6"
					label={"What's new.."}
					component={renderTextField}
					name={'newPostText'}
				/>
			</div>
			<Button
				variant="contained"
				color="primary"
				className={cl.button}
				type={'submit'}
				endIcon={<PostAdd/>}
				disabled={props.pristine}
			>
				Add post
			</Button>
		</form>
	)
}

const PostReduxForm = reduxForm({
	form: 'postSend',
	validate
})(PostForm)

export default Posts
