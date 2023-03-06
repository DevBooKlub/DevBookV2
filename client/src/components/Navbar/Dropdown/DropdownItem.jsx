import React from 'react'

function DropdownItem(props) {
  return (
    
  <li className='dropdown-item' onClick={props.onClick} >
    <img onClick={()=> props.goToMenu} src={props.img} alt="" />
    <p className='text-dropdown-item text'>{props.text}</p>
  </li>
 
  )
}



export default DropdownItem