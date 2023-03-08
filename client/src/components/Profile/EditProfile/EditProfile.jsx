import React, { useState, useContext, useEffect } from 'react'
import { AuthContext } from '../../../context/authContext'
import './editProfile.scss'
import axios from 'axios'
import logoBlack from '../../../assets/img/logosmall.png'
import closeIconBlack from '../../../assets/img/close.png'
import logowhite from '../../../assets/img/logowhite.png'
import closeImgWhite from '../../../assets/img/closeLight.png'
import addImgIconColor from '../../../assets/img/addImgColor.png'
import ModalBG from '../../ModalBG/ModalBG'
import ModalBGGreen from '../../ModalBG/ModalBGGreen'

function EditProfile({ theme, setTheme, open, setOpen }) {
  const { user, setUser } = useContext(AuthContext)
  const [picFileName, setPicFileName] = useState(null)
  const [bannerFileName, setBannerFileName] = useState(null)

  const closeModal = () => {
    setOpen(false)
  }

  const [value, setValue] = useState({
    username: user.username,
    nickname: user.nickname,
    quote: user.quote,
  })
  const [images, setImages] = useState({
    userBanner: null,
    userPic: null,
  })

  const handleInputChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value })
  }

  const fileChange = (evt) => {
    if (!evt.target.files) return
    const file = evt.target.files[0]
    const name = evt.target.name
    if (!file.type.includes('image')) return
    if (name === 'userBanner') setBannerFileName(file.name)
    if (name === 'userPic') setPicFileName(file.name)

    setImages((prev) => ({ ...prev, [name]: file }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const formData = new FormData()
    formData.append('username', value.username)
    formData.append('nickname', value.nickname)
    formData.append('quote', value.quote)
    formData.append('userPic', images.userPic)
    formData.append('userBanner', images.userBanner)
    try {
      const axiosConfig = {
        method: 'PATCH',
        withCredentials: true,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        data: formData,
      }

      const { data } = await axios(`${__URL_BASE__}api/users/`, axiosConfig)
      setUser(data.data)
      closeModal()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='modal'>
      <div className='modal-content-edit'>
        <div className='modalbg-wrapper-top-edit'>
          {theme === 'dark' ? <ModalBG /> : <ModalBGGreen />}
        </div>
        <div className='modalbg-wrapper-top-two-edit'>
          {theme === 'dark' ? <ModalBG /> : <ModalBGGreen />}
        </div>
        <img
          className='close-icon'
          src={theme === 'dark' ? closeImgWhite : closeIconBlack}
          onClick={closeModal}
          alt=''
        />
        <img
          className='logo-img-modal'
          src={theme === 'dark' ? logowhite : logoBlack}
          alt=''
        />
        <div className='modal-welcome-text-box-edit'>
          <h1 className='edit-text'>Edit Your Profile!</h1>
        </div>
        <div className='modal-form-container-edit'>
          <form
            className='edit-form'
            action=''
            method='post'
            onSubmit={handleSubmit}
          >
            {/* <label htmlFor="name"><b>Name</b> */}
            <input
              type='text'
              placeholder='Update Your User Name'
              name='username'
              id='username'
              onChange={handleInputChange}
              value={value.username}
            />
            {/* <label htmlFor="email"><b>Email</b> */}
            {/* <input type="text" placeholder="Enter Email" name="email" id="email" /> */}
            <input
              type='text'
              placeholder='Update Your Nickname or Professions'
              name='nickname'
              id='nickname'
              onChange={handleInputChange}
              value={value.nickname}
            />
            {/* <label htmlFor="psw"><b>Password</b> */}
            <input
              type='text'
              placeholder='Update Your Quote/Bio'
              name='quote'
              id='quote'
              onChange={handleInputChange}
              value={value.quote}
            />

            <div className='add-img-wrapper'>
              <label className='btn-addImg' htmlFor='userPic'>
                <img className='btn-icon' src={addImgIconColor} alt='' />
                <input
                  type='file'
                  id='userPic'
                  className='addImg-input'
                  name='userPic'
                  onChange={fileChange}
                />
                <p className='AddImg-text' id='addImg'>
                  {picFileName ?? 'Update Your Profile Picture'}
                </p>
              </label>
            </div>

            <div className='add-img-wrapper'>
              <label className='btn-addImg' htmlFor='userBanner'>
                <img className='btn-icon' src={addImgIconColor} alt='' />
                <input
                  type='file'
                  id='userBanner'
                  className='addImg-input'
                  name='userBanner'
                  onChange={fileChange}
                />
                <p className='AddImg-text' id='addImg'>
                  {bannerFileName ?? 'Update Your Profile Banner'}
                </p>
              </label>
            </div>

            <button type='submit' className='edit-button backgroundInner'>
              Save Changes
            </button>
          </form>
        </div>
        <div className='modalbg-wrapper-edit'>
          {theme === 'dark' ? <ModalBG /> : <ModalBGGreen />}
        </div>
        <div className='modalbg-wrapper-two-edit'>
          {theme === 'dark' ? <ModalBG /> : <ModalBGGreen />}
        </div>
      </div>
    </div>
  )
}

export default EditProfile
