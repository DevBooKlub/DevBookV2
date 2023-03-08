import React, { useContext } from 'react'
import { AuthContext } from '../../../context/authContext'
import './CurrentUser.scss'

function CurrentUserComponent() {
  const { user } = useContext(AuthContext)

  return (
    <>
      <img
        className='user-img-nav '
        src={`${__URL_BASE__}${user.userPic}`}
        alt=''
      />
      <p className='user-name text'>{user.username}</p>
    </>
  )
}

export default CurrentUserComponent
