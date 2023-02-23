import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import './Navbar.scss'
import logoNav from '../../assets/img/logosmall.png'
import logoNavLight from '../../assets/img/logowhite.png'
import homeImg from '../../assets/img/home.png'
import homeImgoranger from '../../assets/img/homeorange.png'
import darkMode from '../../assets/img/darkImg.png'
import lightMode from '../../assets/img/lightmodeorange.png'
import CurrentUser from './CurrentUser/CurrentUser'
import logOutIcon from '../../assets/img/logout.png'
import { useContext } from 'react'
import { AuthContext } from '../../context/authContext'

function Navbar({ theme, setTheme }) {
  const { setUser } = useContext(AuthContext)
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/')
  }
  const handleLogout = async () => {
    try {
      await axios('/api/logout', {
        method: 'DELETE',
        withCredentials: true,
      })
      setUser(null)
      setTimeout(() => {
        navigate('/login')
      }, 200)
    } catch (err) {
      console.error(err)
    }
  }
  return (
    <div className='header'>
      <div className='nav-container '>
        <div className='logo-search-wrapper'>
          <div className='logo-box'>
            <img
              className='logo'
              src={theme === 'dark' ? logoNavLight : logoNav}
              alt=''
              onClick={handleClick}
            />
          </div>
          <div className='nav-searchbar-box'>
            <input
              className='searchbar box-shadow button-TextInput text'
              type='text'
              placeholder='# Exlopre'
            />
          </div>
        </div>

        <div className='nav-searchbar-box-sm'>
            <input
              className='searchbar box-shadow button-TextInput text'
              type='text'
              placeholder='# Exlopre'
            />
          </div>

        <div className='nav-icons-conatiner'>
          <ul>
            <li className='home'>
              <img
                onClick={handleClick}
                className='social-icons'
                src={theme === 'dark' ? homeImgoranger : homeImg}
                alt=''
              />
            </li>

            <li>
              {theme && (
                <img
                  onClick={() => {
                    setTheme(theme === 'light' ? 'dark' : 'light')
                  }}
                  className='social-icons'
                  src={theme === 'dark' ? lightMode : darkMode}
                />
              )}
            </li>

            {/* <li>
              <img
                className="social-icons"
                src={theme === "dark" ? emailImgLight : emailImg}
                alt=""
              />
            </li> */}
            <li>
              <img
                onClick={handleLogout}
                className='social-icons logout'
                src={logOutIcon}
                alt=''
              />
            </li>

            {/* <li>
              <img className="social-icons" src={theme === "dark" ? messageImgLight : messageImg} alt="" />
            </li> */}
          </ul>
        </div>

        <div className='currentUser-container'>
        <div className='nav-icons-conatiner-sm'>
          <ul>
            <li className='home'>
              <img
                onClick={handleClick}
                className='social-icons'
                src={theme === 'dark' ? homeImgoranger : homeImg}
                alt=''
              />
            </li>

            <li>
              {theme && (
                <img
                  onClick={() => {
                    setTheme(theme === 'light' ? 'dark' : 'light')
                  }}
                  className='social-icons'
                  src={theme === 'dark' ? lightMode : darkMode}
                />
              )}
            </li>

            {/* <li>
              <img
                className="social-icons"
                src={theme === "dark" ? emailImgLight : emailImg}
                alt=""
              />
            </li> */}
            <li>
              <img
                onClick={handleLogout}
                className='social-icons logout'
                src={logOutIcon}
                alt=''
              />
            </li>

            {/* <li>
              <img className="social-icons" src={theme === "dark" ? messageImgLight : messageImg} alt="" />
            </li> */}
          </ul>
        </div>

          <CurrentUser />
        </div>
      </div>
    </div>
  )
}

export default Navbar
