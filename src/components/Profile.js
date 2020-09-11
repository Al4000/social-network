import React from 'react'

const Profile = () => {
  return (
    <main className="content">
      <img src="/banner.png" alt="" />
      <div className="content__info">
        <img src="/avatar.png" alt="" className="avatar"/>
        <div>
          <h2 className="content__info-name">Alexander Kz</h2>
          <p className="content__info-field">Birth: 11 june `87</p>
          <p className="content__info-field">City: Kirov</p>
          <p className="content__info-field">Education: VyatSU '09</p>
          <p className="content__info-field">Website: localhost:3000</p>
        </div>
      </div>
      <div className="content__posts">
        My posts
        <div>
          New post
        </div>
        <div>
          Post 1
        </div>
        <div>
          Post 2
        </div>
      </div>
    </main>
  )
}

export default Profile