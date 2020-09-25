import React from 'react'
import cl from './Posts.module.css'
import Post from './Post/Post'
import Button from '@material-ui/core/Button'
// import TextField from '@material-ui/core/TextField'


const Posts = (props) => {
  let postsElements = props.posts.map((post) => {
    return (
      <Post
        text     = {post.text}
        likes    = {post.likes}
        dislikes = {post.dislikes}
        key      = {post.id}
      />
    )
  })

  let newPostElement = React.createRef()

  let onAddPost = () => {
    props.addPost()
  }

  let onPostChange = () => {
    let text = newPostElement.current.value
    props.changeText(text)
  }

  return (
    <div className={cl.content__posts}>
      <div>
        <div className={cl.textarea}>
          {/* <TextField
            id="outlined-multiline-flexible"
            label="What's new.."
            multiline
            rowsMax={6}
            // value=""
            // onChange=""
            variant="outlined"
            className={cl.textfield}
            
          /> */}
          <textarea 
            rows     = "6"
            ref      = {newPostElement}
            onChange = {onPostChange}
            value    = {props.newPostText}
          />
        </div>

        <Button
          variant   = "contained"
          color     = "primary"
          className = {cl.button}
          onClick   = {onAddPost}
        >
          Add post
        </Button>
      </div>
      <div className={cl.posts}>
        <h4 className={cl.posts__title}>My posts</h4>
        {postsElements}
      </div>
    </div>
  )
}

export default Posts
