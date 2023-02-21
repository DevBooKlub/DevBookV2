import { useState } from 'react'
import { useOutletContext } from 'react-router-dom'
import './Home.scss'

import Posts from '../Posts/Posts'
import SendPost from '../SendPost/SendPost'
import Swiper from '../Swiper/Swiper'

function Home() {
  const [theme] = useOutletContext()
  const [posts, setPosts] = useState([])

  return (
    <div className='home-section-container'>
      <Swiper theme={theme} />
      <SendPost theme={theme} setPosts={setPosts} />
      <Posts theme={theme} posts={posts} setPosts={setPosts} />
    </div>
  )
}

export default Home
