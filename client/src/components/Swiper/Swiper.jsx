import React, { useContext, useEffect } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import axios from 'axios'
import leftArrow from '../../assets/img/leftArrow.png'
import rightArrow from '../../assets/img/rightArrow.png'
import leftArrowBlack from '../../assets/img/arrowLeftBlack.png'
import rightArrowBlack from '../../assets/img/arrowRightBlack.png'
import 'swiper/css'
import './Swiper.scss'
import 'swiper/css/navigation'
import { AuthContext } from '../../context/authContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

export default function SwiperComponent({ theme, users, setUsers }) {
  const { user, setUser } = useContext(AuthContext)

  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/:id')
  }

  // useEffect(() => {
  //   getPosts(setPosts)
  // }, [])
  // return (
  //   <div className='post-container'>
  //     {posts.map((post) => (
  //       <Post theme={theme} {...post} key={`post_${post._id}`} />

  function AllUsers() {
    const [users, setUsers] = useState([]);
    console.log(users);
    const getAllUsers = async () => {
      const res = await axios.get("/api/users/");
      console.log(res.data);
      setUsers(res.data.allUser);
    };

  return (
    <div className='swiper-container '>
      <img
        className='swiper-button image-swiper-button-prev'
        src={theme === 'dark' ? leftArrow : leftArrowBlack}
        alt=''
      />
      <img
        className='swiper-button image-swiper-button-next'
        src={theme === 'dark' ? rightArrow : rightArrowBlack}
        alt=''
      />
      <Swiper
        className='swiper-'
        modules={[Navigation]}
        spaceBetween={15}
        slidesPerView={8}
        navigation={{
          nextEl: '.image-swiper-button-next',
          prevEl: '.image-swiper-button-prev',
          disabledClass: 'swiper-button-disabled',
        }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        // breakpoints={{
        //   // when window width is >= 640px
        //   640: {
        //     width: 640,
        //     slidesPerView: 2,
        //   },
        //   // when window width is >= 768px
        //   768: {
        //     width: 768,
        //     slidesPerView: 4,
        //   },
        // }}
      >
        
        {users.length > 0 &&
          users.map((user, i) => (
            <SwiperSlide key={i}>
             <img
            onClick={handleClick}
            className='user-img-swiper borderImg'
            src={user.userPic}
            alt=''
          />{' '}
          <p className='text'>{user.username}</p>
          </SwiperSlide>
          ))}
       

        
      </Swiper>
    </div>
  )
}
