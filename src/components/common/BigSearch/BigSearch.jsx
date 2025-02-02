import React from 'react'

const BigSearch = ({backgroundColor='bg-zgh' , placeholder='جستجوی خبر و مقاله ...' , width='w-8/12 md:w-6/12' , height='h-10 md:h-12'}) => {
  return (
    <div className={`border mx-auto  flex rounded-lg  overflow-hidden ${height} ${width}`}>
        <input className='block w-full pr-4' placeholder={placeholder}/>    
        <button className={` block  bg-magnifier bg-50 bg-no-repeat bg-center  rounded-none w-10 md:w-12  text-white p-2.5 px-4  ${backgroundColor}`}></button>
    </div>
  )
}

export default BigSearch