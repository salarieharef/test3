import React, { useState } from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import '../../../node_modules/swiper/swiper-bundle.min.css';
import Slide from './slide';
import http from '../../core/services/interceptor'
import {useQuery} from 'react-query'


const TeachersSlider = () => {

  const getTeachersList = async () =>{
    const result = await http.get('/Home/GetTeachers')
    return result;

  }

  const {data , status} = useQuery('teacherQuery' , getTeachersList)



  return (
    <Swiper
    className='shadow-xl'
    // install Swiper modules
    modules={[Navigation, Pagination, Scrollbar, A11y]}
    spaceBetween={50}
    breakpoints={{

      768: {

        slidesPerView: 2,
      },

      1024: {

        slidesPerView: 3,
      },  
 
      1200: {
        spaceBetween : 20 ,            
        slidesPerView: 4,        
      }
      
    }}
    slidesPerView={1}
    navigation



  >
    {status === 'success' && (
      data.map((item , index)=>{
        return(
      <SwiperSlide key={index}>
        <Slide className='h-36' name={item.fullName} pic={item.pictureAddress} desc={item.linkdinProfileLink}/>
      </SwiperSlide>        
        )
      })     
    )}




  </Swiper>
  )
}

export default TeachersSlider