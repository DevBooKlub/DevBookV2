import React, { useState } from 'react'
import './Layout.scss'
import Navbar from '../Navbar/Navbar'
import LeftSection from '../Main/LeftSection/LeftSection'
import RightSection from '../Main/RightSection/RightSection'
import { Outlet } from 'react-router-dom'
import '../../_reset.scss'
import '../../variables/variables.scss'

import { useContext } from 'react'
import { AuthContext } from '../../context/authContext'

function Layout() {
  const [theme, setTheme] = useState('dark')
  const { user } = useContext(AuthContext)
  const [open, setOpen] = useState(false)

  const openModal = () => {
    setOpen(true)
  }

  const closeModal = () => {
    setOpen(false)
  }

  return (
    <div className={theme}>
      {user && (
        <div className='main background box-shadow'>
          <Navbar theme={theme} setTheme={setTheme} openModal={openModal} closeModal={closeModal} open={open} setOpen={setOpen} />

          <div className='main-layout-container'>
            <LeftSection openModal={openModal} closeModal={closeModal} open={open} setOpen={setOpen} theme={theme} setTheme={setTheme} />
            <Outlet context={[theme]} />
            <RightSection theme={theme} setTheme={setTheme} />
          </div>
        </div>
      )}
    </div>
  )
}

export default Layout
