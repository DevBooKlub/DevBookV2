import React, { useContext, useState, useEffect } from 'react'
import { AuthContext } from '../../context/authContext'
import './ProfileLargeComponent.scss'
import { Outlet } from 'react-router-dom'
import banerImgLight from '../../assets/img/banerLight.jpg'
import banerImgDark from '../../assets/img/darkBanner.jpg'
import defaultUserPic from '../../assets/img/pepeUserPic.jpg'

function ProfileLargeComponent({ theme }) {
  const { user } = useContext(AuthContext)

  return (
    <div className='ProfileLargeComponent-container backgroundInner '>
      <div className='banner-container'>
        <img
          className='banner-img '
          src={
            user.userBanner
              ? user.userBanner
              : theme === 'dark'
              ? banerImgDark
              : banerImgLight
          }
          alt=''
        />

        <img
          className='profile-img borderImg'
          src={user.userPic ? user.userPic : defaultUserPic}
          alt=''
        />
      </div>
      <div className='user-details-container'>
        <div className='user-name-conatiner'>
          <h3 className='user-name text'>{user.username}</h3>
        </div>
        <div className='user-nickname-conatiner text'>
          <h3 className='user-nickname text'>
            {user.nickname ? user.nickname : <h3>Edit your Nickname</h3>}
          </h3>
        </div>
        <div className='user-quote-conatiner'>
          <h3 className='user-quote text'>
            {user.quote ? user.quote : <h3>Edit your Quote</h3>}
          </h3>
        </div>
      </div>
    </div>
  )
}

export default ProfileLargeComponent
