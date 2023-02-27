import React,{useState} from 'react'
import "./Dropdown.scss"
import DropdownItem from './DropdownItem'
import rightArrowDark from "../../../assets/img/rightDark.png"
import leftArrowDark from "../../../assets/img/leftDark.png"
import LeftArrow from './LeftArrow'
import Radio from '../../Radio/Radio'

function Dropdown(props) {
    
    
  return (
    <div className='dropdown-container'>
    <DropdownItem >
    <ul>
        <li>Log out</li>
        <li>Theme</li>
        <li>Your Profile</li>
        </ul>

    </DropdownItem>
 

    
        
    


    </div>
  )
}

export default Dropdown