import React from 'react'
import cl from './ProfileInfo.module.css'
import Preloader from '../../common/Preloader/Preloader'
import avatar from '../../../static/avatar.png'
import banner from '../../../static/banner.png'
// import ProfileStatus from './ProfileStatus'
import ProfileStatusWithHooks from './ProfileStatusWithHooks'

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader/>
  }

  return (
    <div>
      <img src={banner} alt="" className={cl.banner} />
      <div className={cl.content__info}>
        <img src={props.profile.photos.large ? props.profile.photos.large : avatar} alt="" className={cl.avatar}/>
        <div>
          <h2 className={cl.content__info_name}>{props.profile.fullName}</h2>
          <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
          <p className={cl.content__info_field}>About: {props.profile.aboutMe}</p>
          <p className={cl.content__info_field}>Facebook: {props.profile.contacts.facebook}</p>
          <p className={cl.content__info_field}>Instagram: @{props.profile.contacts.instagram}</p>
          <p className={cl.content__info_field}>Website: {props.profile.contacts.website}</p>
        </div>
      </div>
    </div>
  )
}

export default ProfileInfo
