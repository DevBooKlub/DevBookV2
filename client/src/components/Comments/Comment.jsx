import './Comments.scss'
import moment from 'moment'

function Comment({ text, user, createdAt }) {
  return (
    <div className='comment'>
      <img
        className='borderImg'
        src={`${__URL_BASE__}${user.userPic}`}
        alt=''
      />
      <div className='user-info-comment'>
        <p className='text'>{user.username}</p>
        <span className='text'>{text}</span>
      </div>
      <ul>
        <li className='date textPostDate'>{moment(createdAt).fromNow()}</li>
      </ul>
    </div>
  )
}
export default Comment
