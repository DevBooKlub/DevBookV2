import { useEffect, useState } from 'react'
import { useOutletContext } from 'react-router-dom'
import './ProfileLarge.scss'
import ProfileLargeComponent from './ProfileLargeComponent'
import Post from '../Posts/Post/Post'

function ProfileLarge() {
  const [theme] = useOutletContext()
  const [posts, setPosts] = useState([])
  useEffect(() => {}, [posts])
  return (
    <div className='profile-section-container'>
      <ProfileLargeComponent theme={theme} setPosts={setPosts} />
      {posts.map((post) => (
        <Post theme={theme} {...post} />
      ))}
    </div>
  )
}

export default ProfileLarge
