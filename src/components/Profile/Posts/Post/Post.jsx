import React from 'react'
import cl from './Post.module.css'

const Post = (props) => {
  return (
    <div className={ cl.item }>
      <div className={ cl.item__body }>
        <img src="/avatar.png" alt="" className={ cl.avatar }/>
        { props.text }
      </div>
      <div className={ cl.likes }>
        <span className={ cl.like }>Like { props.likes }</span>
        <span className={ cl.like }>Dislike { props.dislikes }</span>
      </div>
    </div>
  )
}

export default Post
