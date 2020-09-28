import React from 'react'
import cl from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import PostsContainer from './Posts/PostsContainer'

const Profile = (props) => {
  return (
    <div className={cl.profile}>
      <ProfileInfo profile={props.profile} />
      <PostsContainer />
    </div>
  )
}

export default Profile
