import React from 'react'
import { useNavigate } from 'react-router-dom'


const NewsArticleItem = ({title , desc , pic , teacher}) => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate("/menudetail")
  }

  return (
    <div onClick={handleClick} className='sm:w-1/2 lg:w-1/3 relative sm:text-right p-4 cursor-pointer'>
        <div className='border-2 p-2 pb-8'>
            <img src={pic} alt="" />
            <h2 className='text-lg font-extrabold mt-4'>{title}</h2>
            <h5 className=' mt-4'>{desc} </h5>
            <a className='sm:absolute block mt-4 mx-auto sm:mx-0  left-8 bottom-6 text-blue-500'>{teacher} </a>            
        </div>
    </div>
  )
}

export default NewsArticleItem