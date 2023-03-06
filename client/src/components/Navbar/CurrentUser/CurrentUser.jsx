import './CurrentUser.scss'
import Dropdown from '../Dropdown/Dropdown'
import { useState } from 'react'

import CurrentUserComponent from './CurrentUserComponent'

function CurrentUser({ openDropdown, setOpenDropdown,theme, setTheme, children}) {



  return (
    <div onClick={()=> setOpenDropdown(!openDropdown)} className='current-user-container box-shadow button-TextInput borderCurrentUser backgroundInner'>
      <CurrentUserComponent  />
      {openDropdown && children}
      

      
    </div>
  )
}

export default CurrentUser
