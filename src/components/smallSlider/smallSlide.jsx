import React from 'react'

const SmallSlide = ({name , src , date}) => {
  return (
    <div className=' shadow-2xl py-6 text-center bg-white'>
        <img src={src} className=' mx-auto'/>
        <h2 className='text-lg font-extrabold mt-4'> {name}  </h2>
        <h6 className='text-zgh'>{date} </h6>
    </div>
  )
}

export default SmallSlide