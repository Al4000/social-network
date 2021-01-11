import React from 'react'
import cl from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import PostsContainer from './Posts/PostsContainer'

const Profile = (props) => {
  return (
    <div className={cl.profile}>
      <ProfileInfo saveProfile={props.saveProfile} saveAvatar={props.saveAvatar} isOwner={props.isOwner} profile={props.profile} status={props.status} updateStatus={props.updateStatus} />
      <PostsContainer profile={props.profile} />
    </div>
  )
}

export default Profile
