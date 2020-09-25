import React from 'react'
import cl from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import PostsContainer from './Posts/PostsContainer'

const Profile = () => {
  return (
    <div className={cl.profile}>
      <ProfileInfo />
      <PostsContainer />
    </div>
  )
}

export default Profile
