import React from 'react'
import cl from './Post.module.css'
import avatar from '../../../../static/avatar.png'
import ThumbUpTwoToneIcon from '@material-ui/icons/ThumbUpTwoTone'
import ThumbDownTwoToneIcon from '@material-ui/icons/ThumbDownTwoTone'

const Post = (props) => {
	const handleLike = (id) => {
		props.toggleLike(id)
	}
	const handleDislike = (id) => {
		props.toggleDislike(id)
	}

	return (
		<div className={cl.item}>
			<div className={cl.item__body}>
				<img src={(props.profile != null && props.profile.photos.small != null) ? props.profile.photos.small : avatar} alt="" className={cl.avatar}/>
				{props.text}
			</div>
			<div className={cl.likes}>
        <span className={cl.like} onClick={() => handleLike(props.id)}>
          <ThumbUpTwoToneIcon className={props.like ? cl.like_active : ''} />
          <span className={cl.like_counter}>
            {props.likes}
          </span>
        </span>
				<span className={cl.like} onClick={() => handleDislike(props.id)}>
          <ThumbDownTwoToneIcon className={props.dislike ? cl.like_active : ''} />
          <span className={cl.like_counter}>
            {props.dislikes}
          </span>
        </span>
			</div>
		</div>
	)
}

export default Post
