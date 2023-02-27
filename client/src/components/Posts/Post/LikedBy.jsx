import { useEffect, useState } from 'react'
import likeByIconLight from "../../../assets/img/loveArroww.png"
import likeByIconDark from "../../../assets/img/loveArrowDark.png"

function LikedBy({theme, likes, likesCount }) {
  const [text, setText] = useState('')
  useEffect(() => {
    console.log(likes)
    let t = likes
      .map((like) => like.username)
      .slice(0, 3)
      .join(', ')
    if (likesCount > 3) {
      t = t.concat(` ... and ${likesCount - 3} others.`)
    }
    setText(t)
  }, [likesCount])

  return (
    <div className='text likeby-text'>
      {/* <p className='text like-count'>{likesCount}</p> */}
    {likesCount === 0 ? null :<img className='likeby-icon' src={theme === "dark" ? likeByIconLight : likeByIconDark} alt="" />} 
      <p className='text likedby-user'>{text}</p>
    </div>
  )
}
export default LikedBy
