import React from 'react'
import './LeftSection.scss'
import Profile from '../../Profile/Profile'
import Rooms from '../../Rooms/Rooms'

function LeftSection({open, setOpen, theme, setTheme, openModal, closeModal }) {
  return (
    <div className='left-section-container'>
      <Profile openModal={openModal} closeModal={closeModal} open={open} setOpen={setOpen} theme={theme} setTheme={setTheme} />
      <Rooms theme={theme} setTheme={setTheme} />
    </div>
  )
}

export default LeftSection
