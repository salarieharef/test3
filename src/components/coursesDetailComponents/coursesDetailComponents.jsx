import React, { useState } from 'react'
import Detail from '../common/DetailComponents/Detail'
import SmallSlider from '../smallSlider/SmallSlider'
import { motion } from 'framer-motion'

const CoursesDetailComponents = () => {
    const [relationCourses , setRelationCourses] = useState([
        {name:'دوره ریکت ترم بهار' , src:'minislide.png' , date : 'سال 1399'},
        {name:'دوره ریکت ترم بهار' , src:'minislide.png' , date : 'سال 1399'},
        {name:'دوره ریکت ترم بهار' , src:'minislide.png' , date : 'سال 1399'},
        {name:'دوره ریکت ترم بهار' , src:'minislide.png' , date : 'سال 1399'},
        {name:'دوره ریکت ترم بهار' , src:'minislide.png' , date : 'سال 1399'},
    ])

  return (
    <div className='lg:flex lg:flex-wrap bg-mygray dark:bg-slate-600 dark:text-stone-200 pb-12 font-irSans'>
      <div className='flex flex-col-reverse lg:flex-row'>
        <Detail title1='عنوان دوره :' title1Desc="آموزش جامع ریکت" title2="مدرس دوره :" title2Desc="مهندس آرمین ساکت" 
                title3="درباره دوره :" title3Desc=" لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد "
                title4='شهریه دوره :' title4Desc='66/500' title5="20%"  title6='ترم ارائه شده دوره :' title6Desc='40 نفر'
                title7='تاریخ شروع دوره :' title7Desc='3 / 12 / 1400' title8='تاریخ پایان دوره :'  title8Desc='3 / 12 / 1400' 
                title9='ظرفیت دوره :' title9Desc='40 نفر' title10='تعداد دانشجویان دوره :' title10Desc='20 نفر'
                />



        <motion.div
        initial={{x:-100}}
        animate={{x:0}}
        transition={{duration:0.5}} 
        className=' lg:w-5/12'>
            <img className='w-10/12 mt-12 mx-auto' src='./courses.png'/>
        </motion.div>        
      </div>

        <div className='flex w-full items-center text-center mt-8'>
            <span className='border-2 border-black w-full h-1'></span>
            <h2 className='w-4/12 text-lg font-extrabold'>دوره های مرتبط</h2>
            <span className='border-2 border-black w-full h-1'></span>        
        </div>


        <motion.div
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{delay:0.3}}
        className='container shadow-2xl  mt-16'>
            <SmallSlider list={relationCourses}/>
        </motion.div>

        


    </div>
  )
}

export default CoursesDetailComponents