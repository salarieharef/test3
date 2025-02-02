import React, { useState } from 'react'
import SearchCourses from '../common/search/searchCourses'
import { Pagination } from 'antd'
import style from './PaidCourses.modules.css'
import http from '../../core/services/interceptor'
import {useQuery} from 'react-query'
import { Button , Flex  } from 'antd';
import { useNavigate } from 'react-router-dom';


const AllCoursesItem = ({ favoriteList , refetch}) =>{
  
  const navigate = useNavigate()



  const deleteFavorite =async (idx) =>{
    const data = new FormData();

      const itemId = {
        CourseFavoriteId: idx,
      }

      const keys = Object.keys(itemId)
      keys.forEach((key)=>{
        const item = itemId[key]
        data.append(key , item)
        //console.log(data);
      })

       const result = await http.delete('/Course/DeleteCourseFavorite' , {data:data} )
       refetch()
      console.log(result);  
  

  } 


  return(
    <>
      {favoriteList && favoriteList.map((item , index)=>{
        return(
          <div key={index} className='my-12 lg:my-3 lg:flex justify-around bg-mygray items-center gap-1 text-sm xl:text-base lg:pr-4 2xl:pr-6 mx-auto border' >
            {index+1} -
            <div className='w-1/2 lg:w-1/12 mx-auto lg:mx-0 rounded-full overflow-hidden'>
              <img className=' mt-6 lg:mt-0 mx-auto w-12 h-12 rounded-full overflow-hidden' src={item.tumbImageAddress ? item.tumbImageAddress : 'big.png'}/>        
            </div>

            <h2 className='font-extrabold mt-4 lg:mt-0  w-40 truncate'>
              <span className='lg:hidden'>نام دوره :</span>
              <span className='font-light'>  {item.courseTitle}</span>
            </h2>
            <h2 className='font-extrabold mt-4 lg:mt-0  w-64 truncate'>
              <span className='lg:hidden'>مدرس  :</span>
              <span className='font-light'>{item.teacheName} </span>
            </h2>
            <h2 className='font-extrabold mt-4 lg:mt-0 w-30 border truncate'>
              <span className='lg:hidden'> نوع دوره  :</span>
              <span className='font-light'>{item.typeName}   </span>
            </h2>

            <div  className= 'mx-auto my-4 lg:my-0 text-white  h-6'>
              <Button onClick={()=>navigate('/CourseMenuDetail/' + item.courseId)} className='bg-green-400'>  جزییات  </Button> 
            </div>
            

            <div  className= 'mx-auto my-4 lg:my-0 text-white  h-6'>
              <Button onClick={()=>deleteFavorite(item.favoriteId)} className='bg-blue-400'> حذف از لیست </Button> 
            </div>

          </div>
        )
      })}


    </>    
  )

}





const AllCourses = () => {

  const getFavoriteCourse = async () =>{
    const result = await http.get(`/SharePanel/GetMyFavoriteCourses`)
    return result;
    //console.log(result);
  }

  const {data , status , refetch} = useQuery('favoriteQuery' , getFavoriteCourse  )




  return (
    <div className='lg:flex mx-auto flex-wrap my-8 lg:pt-6 text-center font-irSans'>
      <h2 className='block  my-12 lg:my-0  lg:w-7/12 lg:text-left text-2xl font-extrabold'>دوره های مورد علاقه </h2>
      <SearchCourses backgroundColor='bg-pannel'  width='w-9/12 lg:w-3/12' height='h-10'/>
      <div className='mx-auto  w-10/12 lg:mt-8'>
        <div className='hidden rounded-t-xl lg:flex pr-4 py-2 text-md text-white bg-pannel '>
          <h3 className='pr-3 xl:pr-6 2xl:pr-8  '>نصویز</h3>
          <h3 className='pr-24 '>نام دوره</h3>
          <h3 className='pr-40'>مدرس</h3>
          <h3 className='pr-40'> نوع دوره</h3>

        </div>

        { status === 'success' && (
          <AllCoursesItem favoriteList={data.favoriteCourseDto} refetch={refetch}/>
        )}




        
      </div>  
    </div>
  )
}

export default AllCourses