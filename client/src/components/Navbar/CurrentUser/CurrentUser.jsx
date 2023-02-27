import './CurrentUser.scss'
import Dropdown from '../Dropdown/Dropdown'
import { useState } from 'react'

import CurrentUserComponent from './CurrentUserComponent'

function CurrentUser(props) {

const [open, setOpen] = useState(false)

  return (
    <div onClick={()=> setOpen(!open)} className='current-user-container box-shadow button-TextInput borderCurrentUser backgroundInner'>
      <CurrentUserComponent  />
{open && props.children}
      

      
    </div>
  )
}

export default CurrentUser
