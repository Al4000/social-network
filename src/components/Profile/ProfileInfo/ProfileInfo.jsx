import React from 'react'
import cl from './ProfileInfo.module.css'

const ProfileInfo = () => {
  return (
    <div>
      <img src="/banner.png" alt="" className={cl.banner} />
      <div className={cl.content__info}>
        <img src="/avatar.png" alt="" className={cl.avatar}/>
        <div>
          <h2 className={cl.content__info_name}>Alexander Kz</h2>
          <p className={cl.content__info_field}>Birth: 11 june `87</p>
          <p className={cl.content__info_field}>City: Kirov</p>
          <p className={cl.content__info_field}>Education: VyatSU '09</p>
          <p className={cl.content__info_field}>Website: localhost:3000</p>
        </div>
      </div>
    </div>
  )
}

export default ProfileInfo
