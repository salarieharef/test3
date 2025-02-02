import React from 'react'
import { motion } from 'framer-motion'

const SingleNewsAndArticle = ({pic , desc}) => {
  return (
    <motion.div
    initial={{ x : 50 , opacity: 0  }}
    whileInView={{ x : 0 , opacity: 1 }}
    transition={{delay:0.3}}
    className='border shadow-2xl relative sm:flex gap-8 w-full xl:h-40 mt-4 px-3'>
        <img className='m-4 mx-auto sm:mx-0' src={pic}/>
        <p className='pl-8 pr-4 text-sm mt-6'>
            {desc}
        <span><img className='sm:absolute w-8 mx-auto sm:mx-0 mt-2 left-6 bottom-2' src='./felesh.png'/></span>
        </p>
    </motion.div>
  )
}

export default SingleNewsAndArticle