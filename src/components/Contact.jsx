import React from 'react'
import image from '../images/image copy 2.png'

function Contact() {
  return (
   <div className='w-full h-[664px] flex justify-between items-center'>
    <div className='w-1/2 h-full flex flex-col justify-center items-center '>    
       <h1 className='text-4xl md:text-4xl font-bold max-w-xl mb-4 text-gray-400'>Contact Me : </h1>
       <h1 className='text-4xl md:text-4xl font-bold max-w-xl mb-4 text-gray-400'>Phone Number : +99891697**** </h1>
      <button className="btn btn-info"><a href="https://t.me/br_akhmedov">Telegram</a></button>
    </div>
    <div className='w-[400px] bg-yellow-100'>
    <img src={image} alt="" className='w-full h-full ' />
    </div>
   </div>
  )
}

export default Contact

//  <div className='w-[100%] h-[660px]  
//     </div>