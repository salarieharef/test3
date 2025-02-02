import React, { useState } from 'react'
import Detail from '../common/DetailComponents/Detail'
import SmallSlider from '../smallSlider/SmallSlider'

const NewsDetailComponent = () => {
    const [relationNews , setRelationNews] = useState([
        {name:'دوره ریکت ترم بهار' , src:'minislide.png' , date : 'سال 1399'},
        {name:'دوره ریکت ترم بهار' , src:'minislide.png' , date : 'سال 1399'},
        {name:'دوره ریکت ترم بهار' , src:'minislide.png' , date : 'سال 1399'},
        {name:'دوره ریکت ترم بهار' , src:'minislide.png' , date : 'سال 1399'},
        {name:'دوره ریکت ترم بهار' , src:'minislide.png' , date : 'سال 1399'},
    ])

  return (
    <div className='lg:flex lg:flex-wrap bg-mygray pb-12 font-irSans'>
      <div className='flex flex-col-reverse lg:flex-row'>
        <Detail title1='عنوان خبر :' title1Desc="آموزش جامع ریکت" title2=" دسته خبر :" title2Desc="مهندس آرمین ساکت" 
                title3="متن خبر  :" title3Desc=" لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد "
                title4=' تاریخ انتشار خبر :' title4Desc='3 / 12 / 1400'  title6='دسته بندی :' title6Desc='مقاله '

                />



       <div className=' lg:w-5/12'>
          <img className='w-10/12 mt-12 mx-auto' src='./courses.png'/>
       </div>        
      </div>




        <div className='flex w-full  items-center text-center mt-8'>
          <span className='border-2 border-black w-full h-1'></span>
          <h2 className='w-4/12 lg:text-lg lg:font-extrabold'> اخبار مرتبط</h2>
          <span className='border-2 border-black w-full h-1'></span>        
        </div>

        <div className='container border  mt-16'>
            <SmallSlider list={relationNews}/>
        </div>

        <div className="mx-auto">
          <svg
            aria-hidden="true"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="bg-gray-700 shadow-2xl text-white rounded-full w-14 h-14 relative top-20 "
          >
            <path
              d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </div>
    </div>
  )
}

export default NewsDetailComponent