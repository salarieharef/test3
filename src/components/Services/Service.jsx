import React from 'react'

const Service = ({name , pic , desc}) => {
  return (
    <div className='  text-center w-full sm:w-1/2  lg:w-1/4 mt-16 lg:mt-0'>
        <div className='  mx-auto rounded-full overflow-hidden w-36 h-36 lg:w-30 lg:h-30'>
        <img src={pic}/>
        </div>
        <h3 className='mb-2'>{name}</h3>
        <span className='block w-16 mx-auto border-b-4 border-yellow-400'></span>
        <p className='mt-2 text-lg'>{desc}</p>
    </div>
  )
}

export default Service