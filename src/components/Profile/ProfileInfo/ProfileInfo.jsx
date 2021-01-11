import React, {useState} from 'react'
import cl from './ProfileInfo.module.css'
import Preloader from '../../common/Preloader/Preloader'
import avatar from '../../../static/avatar.png'
import banner from '../../../static/banner.png'
import ProfileStatusWithHooks from './ProfileStatusWithHooks'
import Button from '@material-ui/core/Button'
import CloudUploadIcon from '@material-ui/icons/CloudUpload'
import {Edit} from '@material-ui/icons'
import ProfileDataForm from './ProfileDataForm'

const ProfileInfo = (props) => {

  let [editMode, setEditMode] = useState(false)

  if (!props.profile) {
    return <Preloader/>
  }

  const onAvatarUpload = (e) => {
    if (e.target.files.length) {
      props.saveAvatar(e.target.files[0])
    }
  }

  const onSubmit = (formData) => {
    props.saveProfile(formData)
      .then(() => {
        setEditMode(false)
      })
  }

  return (
    <div>
      <img src={banner} alt="" className={cl.banner} />
      <div className={cl.content__info}>
        <div className={cl.avatar_block}>
          <img src={props.profile.photos.large ? props.profile.photos.large : avatar} alt="" className={cl.avatar}/>
          {
            props.isOwner &&
            <div>
              <input
                accept="image/*"
                className={cl.input_upload}
                id="contained-button-file"
                multiple
                type="file"
                onChange={onAvatarUpload}
              />
              <label htmlFor="contained-button-file">
                <Button
                  variant="contained"
                  color="default"
                  component="span"
                  className={cl.button_upload}
                  endIcon={<CloudUploadIcon />}
                >
                  Upload photo
                </Button>
              </label>
            </div>
          }
        </div>
        <div>
          <h2 className={cl.content__info_name}>{props.profile.fullName}</h2>
          <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
          { editMode
            ? <ProfileDataForm initialValues={props.profile} onSubmit={onSubmit} />
            : <ProfileData profile={props.profile} isOwner={props.isOwner} toEditMode={() => setEditMode(true)}/>}
        </div>
      </div>
    </div>
  )
}

const ProfileData = (props) => {
  return (
    <div>
      {props.isOwner && <Button
        size="small"
        variant="contained"
        color="default"
        className={cl.button_edit}
        endIcon={<Edit />}
        onClick={props.toEditMode}
      >
        Edit
      </Button>}
      <p className={cl.content__info_field}><b>Looking for a Job:</b> {props.profile.lookingForAJob ? 'yes' : 'no'}</p>
      <p className={cl.content__info_field}><b>About:</b> {props.profile.aboutMe}</p>
      <p className={cl.content__info_field}><b>Facebook:</b> {props.profile.contacts.facebook}</p>
      <p className={cl.content__info_field}><b>Instagram:</b> {props.profile.contacts.instagram}</p>
      <p className={cl.content__info_field}><b>Website:</b> {props.profile.contacts.website}</p>
    </div>
  )
}

export default ProfileInfo
