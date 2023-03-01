import React, { useContext } from 'react'
import { AuthContext } from '../../../context/authContext'
import './CurrentUser.scss'

function CurrentUserComponent() {
  const { user } = useContext(AuthContext)

  return (
    <>
      <img
        className='user-img-nav '
        src={`https://dev-book-server-vl45.onrender.com/${user.userPic}`}
        alt=''
      />
      <p className='user-name text'>{user.username}</p>
    </>
  )
}

export default CurrentUserComponent
