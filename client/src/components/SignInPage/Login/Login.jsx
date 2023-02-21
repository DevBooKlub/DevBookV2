import React, { useContext, useEffect, useState } from 'react'
import '../SignInPage.scss'
import '../Modal/Modal.scss'
import Modal from '../Modal/Modal'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { AuthContext } from '../../../context/authContext'

function Login({ open, setOpen }) {
  const { user, setUser } = useContext(AuthContext)
  const navigate = useNavigate()
  useEffect(() => {
    user && navigate('/')
  })
  const openModal = () => {
    setOpen(true)
  }

  const [values, setValues] = useState({
    email: '',
    password: '',
  })

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    const formData = new FormData(event.target)

    const data = {
      email: formData.get('email'),
      password: formData.get('password'),
    }
    const axiosConfig = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true,
      data,
    }
    try {
      const { data } = await axios('/api/login', axiosConfig)
      setUser(data.data)
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='sign-form-box backgroundInner '>
      <form className='form' action='' method='post' onSubmit={handleSubmit}>
        <input
          className='border '
          type='text'
          placeholder='Login'
          id='email'
          name='email'
          required={true}
          onChange={handleChange}
        />
        <input
          className='border '
          type='text'
          placeholder='Password'
          id='password'
          name='password'
          required={true}
          onChange={handleChange}
        />
        <button
          className='button-sign-in border text'
          type='submit'
          id='button'
        >
          Sign In!
        </button>
      </form>

      <a href='#'>
        <p className='text'>Forgot your password?</p>
      </a>

      <div className='border-white border-line'></div>

      <button onClick={openModal} className='create-acc-btn border text'>
        Create Account
      </button>
    </div>
  )
}

export default Login
