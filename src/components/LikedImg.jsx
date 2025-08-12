import React, { useState } from 'react'
import NotFound from '../constants/NotFound'

function LikedImg() {
    const [likedImages, setLikedImages] = useState([])
  return (
    <div className='flex justify-center items-center'>
        {likedImages && likedImages.length > 0 ? <div></div> : <NotFound/> }
    </div>
  )
}

export default LikedImg
