import React from 'react'
import cl from './ProfileInfo.module.css'
import Preloader from '../../common/Preloader/Preloader'

const ProfileInfo = (props) => {
  // debugger
  if (!props.profile) {
    return <Preloader/>
  }

  return (
    <div>
      <img src="/banner.png" alt="" className={cl.banner} />
      <div className={cl.content__info}>
        <img src={props.profile.photos.large} alt="" className={cl.avatar}/>
        <div>
          <h2 className={cl.content__info_name}>{props.profile.fullName}</h2>
          <p className={cl.content__info_field}>Status: {props.profile.aboutMe}</p>
          <p className={cl.content__info_field}>Facebook: {props.profile.contacts.facebook}</p>
          <p className={cl.content__info_field}>Instagram: @{props.profile.contacts.instagram}</p>
          <p className={cl.content__info_field}>Website: {props.profile.contacts.website}</p>
        </div>
      </div>
    </div>
  )
}

export default ProfileInfo
