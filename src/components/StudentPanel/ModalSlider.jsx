import React, { useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Virtual,
} from "swiper/modules";
import "../../../node_modules/swiper/swiper-bundle.min.css";
import "../../../node_modules/swiper/swiper-bundle.min.js";
import http from '../../core/services/interceptor'
import {useQuery} from 'react-query'



const ModalSlider = ({modalStyle , setModalStyle , refetch}) => {


  const getAllImages = async () =>{
    const result = await http.get(`/SharePanel/GetProfileInfo`)
    return result;
    //console.log(result);
  }

  const {data , status , refetch:refetch2} = useQuery('AllImages' , getAllImages  )

  const SelectProfileImage =async (x)=>{
    const data = new FormData();
    data.append('ImageId' , x)

    const result = await http.post('/SharePanel/SelectProfileImage' , data)
    refetch()
    console.log(result);
  }

  const DeleteProfileImage =async (x)=>{
    const data = new FormData();
    data.append('DeleteEntityId' , x)

    const result = await http.delete('/SharePanel/DeleteProfileImage' , {data : data})
    refetch2()
    console.log(result);
  }
  

  const hideModal = () =>{
    setModalStyle('hidden top-0 z-50 bg-gray-600/50 h-screen w-screen ')
  }


  return (
    <div className={modalStyle}>
      <div className='text-center cursor-pointer text-white p-3 m-8 bg-red-700 w-16' onClick={hideModal}>
          close
      </div>
      <Swiper
        modules={[Navigation, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        className=' shadow-2xl bg-slate-500/75 mt-30 w-96 h-96 mx-auto'
          >
        {status === 'success' && (
          data.userImage?.map((item , index)=>{
            return(
            <SwiperSlide key={index}>
              <div className='w-96 h-96'>
                <img className='w-10/12 h-10/12 mx-auto rounded-full' src={item.puctureAddress} alt="" />
                
                <button onClick={() => {SelectProfileImage(item.id)}}  className='bg-pannel text-white mt-4 px-2 py-1' >انتخاب</button>
                <button onClick={() => {DeleteProfileImage(item.id)}}  className='bg-red-400 text-white mt-4 mx-2 px-2 py-1' >حذف</button>
              </div>
            </SwiperSlide>            
            )
          })         
        )}



        ...
      </Swiper>  
      
          
    </div>

  )
}

export default ModalSlider