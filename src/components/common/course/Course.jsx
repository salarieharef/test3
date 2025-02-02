import React, { useState } from 'react'
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import http from '../../../core/services/interceptor'
import {useMutation, useQuery} from 'react-query'
import { LikeOutlined , DislikeOutlined} from "@ant-design/icons";
import toast, { Toaster } from 'react-hot-toast';



const Course = ({courseList , courseShape , refetch , status , idx , courseName , teacher , date , src , likeCount , userIsLiked , userLikedId , userFavorite}) => {
  const [count , setCount] = useState(likeCount)
  const navigate = useNavigate()
  const [like , setLike] = useState(1)


  const handleClick = (courseIdx) => {
    navigate("/CourseMenuDetail/" + courseIdx)
  }

 

  const handleReserve =async (courseIdx) =>{
    
    const itemId = {
      courseId: courseIdx,
    }
    const result = await http.post('/CourseReserve/ReserveAdd' , itemId )
    // console.log(result);

    if(result.success === true){
      toast.success(result.message)    
    }

    else if(result.success === false){
      toast.error(result.errors)       
    }
  }
  

  const handleFavorite =async (idC , IsFavorite , favoriteId) =>{
    if(IsFavorite === false){
      const itemId = {
        courseId: idC,
      }
      const result = await http.post('/Course/AddCourseFavorite' , itemId )
      console.log(result);        
      refetch()
    }

    else if(IsFavorite === true){
      const data = new FormData();

      const itemId = {
        CourseFavoriteId: favoriteId,
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

  } 



  const handleLike =async (courseId , likeId , isLike) =>{
    if(isLike === false){
      const result = await http.post(`/Course/AddCourseLike?CourseId=${courseId}`)
      console.log(result);
      refetch()      
    }

    else if(isLike === true){
      const data = new FormData()
      data.append('CourseLikeId' , likeId)
      const result = await http.delete(`/Course/DeleteCourseLike` , {data:data}) 
      console.log(result);  
      refetch() 
    }


  }

  



  

  
  



  const [courseStyle , setCourseStyle] = useState([
    // course style for courses
    {parent : 'border  md:w-5/12 rounded-xl p-8 lg:flex shadow-2xl dark:shadow-shadowDarkUp dark:border-slate-400 m-6 md:m-0 cursor-pointer',
      firstDiv:'lg:w-1/2  rounded-xl shadow-inner bg-course',
      img:'mx-auto',
      secondDiv:'lg:w-1/2 text-center lg:text-right lg:pr-6 ',
      h2:'font-bold mt-4 xl:mt-4 truncate cursor-pointer truncate',
      firstP:'mt-8 truncate',
      secondP:'mt-8 truncate',
      but:' block  border-zgh border rounded-xl mx-auto xl:mr-18 mt-6 py-1 px-4',
    },

    //course style for landing 
    {parent : 'border shadow-xl  pb-7 text-center w-full sm:w-5/12 lg:w-1/5',
      firstDiv:'bg-course p-8',
      img:' mx-auto w-4/6 h-20',
      secondDiv:'',
      h2:'p-2 md:p-4 text-sm sm:text-base md:text-xl font-sm mt-4 cursor-pointer truncate',
      firstP:'p-2 md:p-4 text-sm sm:text-base md:text-lg text-blue-400 truncate',
      secondP:'p-2 truncate',
      but:' border-2 text-zgh rounded-xl p-2 px-2 md:px-4 m-2 ',  
    }
  ])

  return (

    <>
      {courseList?.map((item , index)=>{
        return(
        <motion.div
          key={index}
          initial={{opacity:0}}
          whileInView={{opacity:1}}
          transition={{ delay:0.3}}
          className={courseShape =='courses' ? courseStyle[0].parent : courseStyle[1].parent}>
              <div className={courseShape =='courses' ? courseStyle[0].firstDiv : courseStyle[1].firstDiv}>
                  <img className={courseShape =='courses' ? courseStyle[0].img : courseStyle[1].img}  src={item.tumbImageAddress ? item.tumbImageAddress : './big.png'} alt="" />
              </div>
              <div className={courseShape =='courses' ? courseStyle[0].secondDiv : courseStyle[1].secondDiv}>
                  <h2 className={courseShape =='courses' ? courseStyle[0].h2 : courseStyle[1].h2} onClick={()=>handleClick(item.courseId)}>{item.title}</h2>
                  <p className={courseShape =='courses' ? courseStyle[0].firstP : courseStyle[1].firstP}>مدرس : {item.teacherName} </p>
                  {courseShape =='courses' ? 
                  <p className={ courseStyle[0].secondP }>   آخرین آپدیت : {هفثئ.lastUpdate}</p>
                  : null}

                  <div className='flex  h-6  mt-6'>

                    <button onClick={()=>handleFavorite(item.courseId , item.userFavorite , item.userFavoriteId)} className='flex w-1/2  h-6 justify-center'>
                      {item.userFavorite === true  ? <img className=' overflow-hidden' src='./heart2.png'/> : <img className='w-1/4 overflow-hidden' src='./heart1.png'/>}
                  
                    </button>

                  <button onClick={()=>{handleLike(item.courseId , item.userLikedId , item.userIsLiked)}} className='flex w-1/4  h-6 justify-center '>
                    
                      {item.userIsLiked === true ? <img className=' overflow-hidden' src='./like2.png'/> : <img className=' overflow-hidden' src='./like1.png'/>}
                      <h5 className='mr-2'>{item.likeCount}</h5>                        
                    </button>                
           
                  </div>

                  <button onClick={()=>handleReserve(item.courseId)} className={courseShape =='courses' ? courseStyle[0].but : courseStyle[1].but}>ثبت دوره</button>
              </div>
          </motion.div>              
        )
      })}

    </>


  )
}

export default Course