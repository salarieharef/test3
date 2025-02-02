import React from 'react'
import Allcourse from '../../components/allcourse/allcourse';
import BigSearch from '../../components/common/BigSearch/BigSearch';
import { motion } from 'framer-motion';

const Courses = () => {
  return (
    <motion.div 
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{duration:0.5}}
    className='text-center font-irSans'>

        <motion.section
            initial={{opacity:0 , y:-100}}
            animate={{opacity:1 , y:0}}
            transition={{duration:0.5}}        
        >
            <div className='mx-auto w-2/5 mt-12'><img src="laptop.png" alt="" /></div>
        </motion.section>

        <h2 className='mb-12 text-lg font-extrabold'>دوره های آموزشی</h2>

        {/* <BigSearch placeholder='جستجوی دوره ...'/> */}

        <Allcourse parentShape='courses' courseShape='courses'/>

        <button className='block mx-auto rounded-xl mt-12 py-3 px-10 border-zgh border'>بیشتر</button>

  </motion.div>
  )
}

export default Courses