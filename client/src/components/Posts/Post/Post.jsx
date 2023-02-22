import React, { useContext, useState } from 'react'
import './Post.scss'
import likeImg from '../../../assets/img/like.png'
import likeImgLight from '../../../assets/img/likeLight.png'
import commentImg from '../../../assets/img/comment.png'
import commentImgLight from '../../../assets/img/commentLight.png'
import shareImg from '../../../assets/img/share.png'
import shareImgLight from '../../../assets/img/shareLight.png'
import Comments from '../../Comments/Comments'
import { AuthContext } from '../../../context/authContext'
import defaultUserPic from '../../../assets/img/pepeUserPic.jpg'
import addFriendLight from '../../../assets/img/addContact.png'
import addFriendDark from '../../../assets/img/addConntactLight.png'
import removeFriendDark from '../../../assets/img/removeContactLight.png'
import removeFriendLight from '../../../assets/img/removeContact.png'
import deletePostLight from '../../../assets/img/trashLight.png'
import deletePostDark from '../../../assets/img/trashDark.png'
import veryfiedIcon from '../../../assets/img/verified.png'

import moment from 'moment'

import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Post({
  theme,
  user: postAuthor,
  image,
  desc,
  title,
  friends,
  nickname,
  createdAt,
  _id: postID,
  posts,
  setPosts,
}) {
  const { user, setUser } = useContext(AuthContext)
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/profile/${postAuthor._id}`)
  }

  const isMyFriend = () =>
    user.friends.find((friend) => friend._id === postAuthor._id)

  const handleAddRemoveFriend = async () => {
    const { data } = await axios({
      method: 'patch',
      url: `/api/users/${postAuthor._id}`,
    })
    setUser(data.data)
  }
  const handleDelete = async () => {
    try {
      const res = await axios(`/api/posts/${postID}`, {
        method: 'DELETE',
        withCredentials: true,
      })
      if (res.status === 204) setPosts(posts.filter((e) => e._id !== postID))
    } catch (err) {
      console.log(err)
    }
  }
  const [commentOpen, setCommentOpen] = useState(false)

  const userPicURL = `${__URL_BASE__}${postAuthor.userPic}`
  const postPicURL = `${__URL_BASE__}${image}`

  return (
    <div className='single-post-container backgroundInner box-shadow'>
      <div className='single-post-wraper'>
        <div className='user'>
          <div className='userInfo'>
            {postAuthor.userPic && (
              <img
                className='user-img borderImg'
                onClick={handleClick}
                src={postAuthor.userPic ? userPicURL : defaultUserPic}
                alt=''
              />
            )}
            <div className='details'>
              {postAuthor.nickname && (
                <div className='nickname-container'>
                  <span className='nickname textPostNickname'>{`${'@'}${
                    postAuthor.nickname
                  }`}</span>
                  <img src={veryfiedIcon} alt='' />
                </div>
              )}
              <div className='nameDate-container'>
                <span className='user-name text '>{postAuthor.username}</span>
                <ul>
                  <li className='post-date text textPostDate'>
                    {moment(createdAt).fromNow()}
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div
            onClick={handleAddRemoveFriend}
            className='addFriend-icon-container '
          >
            {!isMyFriend() ? (
              <img
                src={theme === 'dark' ? addFriendLight : addFriendDark}
                alt=''
              />
            ) : (
              <img
                src={theme === 'dark' ? removeFriendLight : removeFriendDark}
                alt=''
              />
            )}
          </div>
        </div>
        <div className='content'>
          <p className='post-text text'>{desc}</p>
          <img src={postPicURL} alt='' />
        </div>
        <div className='info-icons'>
          <div className='item'>
            <img src={theme === 'dark' ? likeImgLight : likeImg} alt='' />
            <p className='text'>Like</p>
          </div>
          <div className='item' onClick={() => setCommentOpen(!commentOpen)}>
            <img src={theme === 'dark' ? commentImgLight : commentImg} alt='' />
            <p className='text'>Comment</p>
          </div>
          {/* <div className='item'>
            <img src={theme === 'dark' ? shareImgLight : shareImg} alt='' />
            <p className='text'>Share</p>
          </div> */}
          {user._id === postAuthor._id ? (
            <div className='item' onClick={handleDelete}>
              <img
                className={'visible'}
                src={theme === 'dark' ? deletePostLight : deletePostDark}
                alt=''
              />{' '}
              <p className='text'>Delete</p>
            </div>
          ) : null}
        </div>
        {commentOpen && <Comments />}
      </div>
    </div>
  )
}

export default Post
