import React from 'react'
import "./SearchbarDropdown.scss"

function SearchBarDropdown({user, value, handleNavigate}) {



  return (
    <ul className='searchbar-dropdown backgroundInner box-shadow searchbar-dropdown-sm'
    
  
  >
    {user.friends
      .filter((e) => e.username.includes(value))
      .map((friend) => (
        <li className='text'
        
          // onClick={handleNavigate(friend._id)}
          onClick={handleNavigate(friend._id)}
        >
          {friend.username}
        </li>
      ))}
  </ul>
  )
}

export default SearchBarDropdown