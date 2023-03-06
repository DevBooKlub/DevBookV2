import React, { useContext } from 'react'
import './ContactComponent.scss'
import { AuthContext } from '../../../context/authContext'
import { useNavigate } from 'react-router-dom'
import closeIconRed from '../../../assets/img/removeContact.png'
import removeContactLight from '../../../assets/img/removeContactLight.png'
import chatDark from '../../../assets/img/chatDark.png'
import axios from 'axios'

function ContactComponent({ theme, friend, setTheme, open, setOpen }) {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/profile/${friend._id}`)
  }

  const { setUser } = useContext(AuthContext)

  const openModal = () => {
    setOpen(true)
  }

  const closeModal = () => {
    setOpen(false)
  }

  const removeFriend = async () => {
    const { data } = await axios({
      method: 'patch',
      url: `https://dev-book-server-vl45.onrender.com/api/users/${friend._id}`,
      headers: { 'Content-Type': 'application/json' },
    })
    setUser(data.data)
  }

  return (
    <div className='contact-wrapper '>
      <div onClick={handleClick} className='contactComponent-container'>
        <>
          <img
            className='contact-img borderImg'
            src={`https://dev-book-server-vl45.onrender.com/${friend.userPic}`}
            alt=''
          />
          <h2 className='contact-name text'>{friend.username}</h2>
        </>
      </div>
      <div className='contact-icons-container'>
        {/* <img
          onClick={true ? openModal : closeModal}
          src={chatDark}
          alt=""
        /> */}
        <img
          onClick={removeFriend}
          className='removeFriend-icon'
          src={theme === 'dark' ? closeIconRed : removeContactLight}
          alt=''
        />
      </div>
    </div>
  )
}

export default ContactComponent
