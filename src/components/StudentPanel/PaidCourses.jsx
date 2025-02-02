import React, { useState } from 'react'
import SearchCourses from '../common/search/searchCourses'
import { Pagination } from 'antd'
import style from './PaidCourses.modules.css'
import http from '../../core/services/interceptor'
import {useQuery} from 'react-query'
import toast, { Toaster } from 'react-hot-toast';
import { Button , Flex  } from 'antd';
import { useNavigate } from 'react-router-dom';

const PaidCoursesItem = ({data ,courseId , refetch , pic , name , teacher , term , startDate , cost , reserveId}) =>{
  const navigate = useNavigate()

  const deleteReserve = async (resId) =>{
    const obj ={
      id : resId,
    }

    const result = await http.delete(`/CourseReserve` , {data:obj})  
     refetch()   

    if(result.success === true){
      toast.success(result.message)    
    }

    else if(result.success === false){
      toast.error(result.errors)       
    }


    console.log(result);
  }


  return(
    <>
      {data && data.map((item , index)=>{
        return(
          <div key={index} className='h-10 my-12 lg:my-3 lg:flex justify-around bg-mygray items-center gap-10 xl:gap-12 2xl:gap-5 text-sm xl:text-base lg:pr-4 2xl:pr-6 mx-auto border'>

            <div className='font-extrabold mt-4 lg:mt-0  w-56 truncate' >
              <span className='lg:hidden'>نام دوره :</span>
              <span className='font-light'>{item.courseName}  </span>
            </div>

            <h2 className='font-extrabold mt-4 lg:mt-0  w-48'>
              <span className='lg:hidden'>تاریخ    :</span>
              <span className='font-light'> {item.reserverDate} </span>
            </h2>

            <div  className= 'mx-auto my-4 lg:my-0 text-white  h-6'>
                <Button onClick={()=>navigate('/CourseMenuDetail/' + item.courseId)} className='bg-green-400'>  جزییات  </Button> 
            </div>
                  

            <div  className= 'mx-auto my-4 lg:my-0 text-white w-6 h-6'>
              <Button onClick={()=>deleteReserve(item.reserveId)} className='bg-blue-400'>حذف رزرو </Button> 
            </div>
            
          </div>           
        )
      })}

    </>   
  )

}

const PaidCourses = () => {
  
  const getReserveCourse = async () =>{
    const result = await http.get(`/SharePanel/GetMyCoursesReserve`)
    return result;
    //console.log(result);
  }

  const {data , status , refetch} = useQuery('reserveQuery' , getReserveCourse  )





  return (
    <div className='lg:flex mx-auto flex-wrap my-8 lg:pt-6 text-center font-irSans'>
      <h2 className='block  my-12 lg:my-0  lg:w-7/12 lg:text-left text-2xl font-extrabold'>دوره های رزرو شده</h2>
      <SearchCourses backgroundColor='bg-pannel' width='w-9/12 lg:w-3/12' height='h-10'/>
      <div className='mx-auto  w-10/12 lg:mt-8'>
        <div className='hidden rounded-t-xl lg:flex pr-4 py-2 text-md text-white bg-pannel '>
          {/* <h3 className='pr-3 xl:pr-6 2xl:pr-8'>نصویز</h3> */}
          <h3 className='pr-10 xl:pr-16 2xl:pr-26'>نام دوره</h3>
          <h3 className='pr-6 xl:pr-10 2xl:pr-48'>ناریخ شروع </h3>
        </div>



        {status === 'success' && (<PaidCoursesItem data={data} refetch={refetch}/>

          // data?.map((item , index)=>{
          //   return(
          //     <>
          //         <PaidCoursesItem courseId={item.courseId} refetch={refetch} key={index} pic={item.pic} name={item.courseName} teacher={item.teacher} 
          //         term={item.term} startDate={item.reserverDate} cost={item.cost} reserveId={item.reserveId}/>   
          //     </>
         
          //     )
          //   })
            )}

            {status === 'loading' && (
              <h1>wait...</h1>
            )}
{/* 
        <div className='mt-8'>
           <Pagination total={pCourses.length} pageSize={6} showQuickJumper onChange={pageSize=>{changeStart(pageSize)}}/>
        </div> */}


        
      </div>  
    </div>
  )
}

export default PaidCourses