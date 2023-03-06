import { useContext, useState, useEffect } from 'react'
import closeCommentIcon from '../../assets/img/cancelLight.png'
import closeCommentIconDark from '../../assets/img/cancelDark.png'
import emojiIcon from '../../assets/img/emoji.png'
import axios from 'axios'
import Picker from 'emoji-picker-react'
import './Comments.scss'
import Comment from './Comment'
import { AuthContext } from '../../context/authContext'

function Comments({
  comments: initialComments,
  postID,
  setCommentOpen,
  commentOpen,
  theme,
}) {
  const { user } = useContext(AuthContext)

  const [value, setValue] = useState('')
  const [comments, setComment] = useState([])

  const [showPicker, setShowPicker] = useState(false)

  const onEmojiClick = (event, emojiObject) => {
    setValue((prev) => prev.concat(emojiObject.emoji))
    setShowPicker(false)
  }

  useEffect(() => {
    setComment(
      initialComments.sort(
        (a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt)
      )
    )
  }, [])

  const handleClick = async (evt) => {
    try {
      const { data } = await axios(`${__URL_BASE__}api/comments/${postID}`, {
        method: 'POST',
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
        },
        data: {
          text: value,
          user: user._id,
          post: postID,
        },
      })

      setComment((prev) => [data.data, ...prev])
    } catch (err) {
      console.log(err)
    }
  }
  const handleChange = (evt) => {
    setValue(evt.target.value)
  }

  return (
    <div className='comments-container'>
      <div className='comments-border border-line'></div>
      <div className='write-comment-container'>
        <img
          className='borderImg user-img'
          src={`${__URL_BASE__}${user.userPic}`}
          alt=''
        />
        <div className='input-box-comments'>
          <input
            className='button-TextInput text'
            type='text'
            placeholder='Write comment'
            value={value}
            onChange={handleChange}
          />
          <img
            className='emoji-icon-btn-comments'
            src={emojiIcon}
            onClick={() => setShowPicker((val) => !val)}
            alt=''
          />
          {showPicker && (
            <Picker
              Theme='auto'
              pickerStyle={{
                width: '40%',
                position: 'absolute',
                right: '0',
                bottom: '-820%',
                background: '#f4f4f4',
                height: '20rem',
              }}
              groupVisibility={{
                recently_used: false,
              }}
              disableSearchBar={true}
              disableSkinTonePicker={true}
              onEmojiClick={onEmojiClick}
            />
          )}
        </div>

        <button
          className='text backgroundInner button-TextInput border'
          onClick={handleClick}
        >
          Send!
        </button>
      </div>
      {comments.map((comment) => (
        <Comment key={`comment_${comment._id}`} {...comment} />
      ))}

      <div
        onClick={() => setCommentOpen(!commentOpen)}
        className='close-comment'
      >
        <img
          src={theme === 'dark' ? closeCommentIcon : closeCommentIconDark}
          alt=''
        />
      </div>
    </div>
  )
}

export default Comments
