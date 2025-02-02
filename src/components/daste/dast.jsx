import React from 'react'

const Dast = ({name , pic}) => {
  return (
    <div className='bg-daste rounded-lg  text-center mt-12 w-full sm:w-1/6 h-32'>
        <div className=' w-10 h-10 mx-auto mt-8  overflow-hidden'>
        <img src={pic}/>
        </div>
        <h3 className='my-3'>{name}</h3>
    </div>
  )
}

export default Dast