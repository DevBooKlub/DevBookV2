import { useContext, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import './Modal.scss'
import closeIconBlack from '../../../assets/img/close.png'
import logoBlack from '../../../assets/img/logosmall.png'
import logowhite from '../../../assets/img/logowhite.png'
import closeImgWhite from '../../../assets/img/closeLight.png'
import { AuthContext } from '../../../context/authContext'
import addImgIconColor from '../../../assets/img/addImgColor.png'
import ModalBG from '../../ModalBG/ModalBG'
import ModalBGGreen from '../../ModalBG/ModalBGGreen'

function Modal({ theme, setOpen }) {
  const navigate = useNavigate()
  const { setUser } = useContext(AuthContext)
  const closeModal = () => {
    setOpen(false)
  }

  const [value, setValue] = useState({
    username: '',
    email: '',
    password: '',
    confirm: '',
  })
  const [userPic, setUserPic] = useState()

  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value })
  }
  const fileChange = (e) => {
    setUserPic(e.target.files[0])
  }
  const handleSubmit = async (e) => {
    e.preventDefault()

    const formData = new FormData()
    formData.append('username', value.username)
    formData.append('email', value.email)
    formData.append('password', value.password)
    formData.append('confirm', value.confirm)
    formData.append('userPic', userPic)
    try {
      const { data } = await axios(
        'https://dev-book-server-vl45.onrender.com/api/register',
        {
          method: 'POST',
          withCredentials: true,
          headers: {
            'Content-Type': 'multipart/form-data',
          },
          data: formData,
        }
      )

      setUser(data.data)
      navigate('/')
      setOpen(false)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='modal'>
      <div className='modal-content box-shadow'>
        {/* <div className='welcome-section-container'></div> */}
        <div className='modalbg-wrapper-top'>
          {theme === 'dark' ? <ModalBG /> : <ModalBGGreen />}
        </div>
        <div className='modalbg-wrapper-top-two'>
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
        <div className='modal-welcome-text-box'>
          <h1 className='register-text'>Get Started!</h1>
        </div>
        <div className='modal-form-container'>
          <form action='' method='post' onSubmit={handleSubmit}>
            {/* <label htmlFor="name"><b>Name</b> */}
            <input
              onChange={handleChange}
              value={value.username}
              type='text'
              placeholder='Enter Full Name'
              name='username'
              id='username'
            />
            {/* <label htmlFor="email"><b>Email</b> */}
            <input
              onChange={handleChange}
              value={value.email}
              type='text'
              placeholder='Enter Email'
              name='email'
              id='email'
            />
            {/* <label htmlFor="psw"><b>Password</b> */}
            <input
              onChange={handleChange}
              value={value.password}
              type='password'
              placeholder='Enter Password'
              name='password'
              id='password'
            />
            {/* <label htmlFor="psw-repeat"><b>Repeat Password</b> */}
            <input
              onChange={handleChange}
              value={value.confirm}
              type='password'
              placeholder='Confirm Password'
              name='confirm'
              id='confirm'
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
                  Add Your Profile Picture
                </p>
              </label>
            </div>

            {/* <p className='policy-text'>
              By creating an account you agree to our{' '}
              <a href='#'>Terms & Privacy</a>.
            </p> */}

            <p onClick={closeModal} className='policy-text'>
              Already have an account? <a href='#'>Sign in!</a>.
            </p>
            <button
              type='submit'
              className='register-button-create-accout text border button-TextInput'
            >
              Register
            </button>
          </form>

          {/* <div className='container-signin'>
            <p onClick={closeModal} className='sign-in-text'>
              Already have an account? <a href='#'>Sign in!</a>.
            </p>
          </div> */}
        </div>
        <div className='modalbg-wrapper'>
          {theme === 'dark' ? <ModalBG /> : <ModalBGGreen />}
        </div>
        <div className='modalbg-wrapper-two'>
          {theme === 'dark' ? <ModalBG /> : <ModalBGGreen />}
        </div>
      </div>
    </div>
  )
}

export default Modal
