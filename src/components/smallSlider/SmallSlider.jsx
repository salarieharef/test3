import React, { useState } from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import "../../../node_modules/swiper/swiper-bundle.min.css";
import SmallSlide from './smallSlide';


const SmallSlider = ({list}) => {
    return (
        <Swiper
    
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          breakpoints={{
            768: {
    
                slidesPerView: 2,
              },
              1024: {
    
                slidesPerView: 4,
              },  
        
          }}  
          slidesPerView={1}      
     
          navigation
    
    
    
        >
    
            {list.map((item , index)=>{
                return(
                    <SwiperSlide key={index}>
                        <SmallSlide name={item.name} src={item.src} date={item.date}/>
                    </SwiperSlide>                
                )
            })}
    
    
    
        </Swiper>
      )
}

export default SmallSlider