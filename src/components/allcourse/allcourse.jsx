import React, { useState , useEffect , useRef } from 'react'
import Course from '../common/course/Course'
import http from '../../core/services/interceptor'
import {useQuery} from 'react-query'
import { Pagination } from 'antd'

const Allcourse = ({parentShape , courseShape}) => {
    const [parentDesign , setParentDesign] = useState([
      // course wraper style for courses
      {parentCourses : 'w-full xl:w-10/12 mt-12 mx-auto md:flex md:flex-wrap justify-center gap-16 ' },
      //course wraper style for landing 
      {parentLanding : 'flex justify-around flex-wrap  mt-8 gap-4 w-full px-6 sm:px-18 text-xl text-center'},

    ])

    const [pageNumber , setPageNumber] = useState(1)    
    const [search , setSearch] = useState('')
    


    const ref = useRef();

    const handleSearch = (e) =>{
      clearTimeout(ref.current)

     const timeOut = setTimeout(()=>{
      e.target.value && setSearch(`&Query=${e.target.value}`)      
     },800)

      !e.target.value && setSearch('')

      ref.current = timeOut
    }
   
      const changeStart = (pageSize) =>{
        setPageNumber(pageSize) ;
      }   
      
      
            

      const getCourseList = async () =>{
        const result = await http.get(`/Home/GetCoursesWithPagination?PageNumber=${pageNumber}&RowsOfPage=4&SortingCol=Active&SortType=DESC${search}&TechCount=0`)
        return result;
      }

      const {data , status, refetch} = useQuery(['courseQuery' , pageNumber , search  ] , getCourseList , )

      
   

      var st = 'st' ;

      if(parentShape == 'courses'){
        st = parentDesign[0].parentCourses;
      }
      else if(parentShape == 'landing'){
        st = parentDesign[1].parentLanding ;
      }

      return (
        
        <section className='mx-auto text-center'>
            
            {parentShape === 'courses' && 
              <div className='border mx-auto  flex rounded-lg  overflow-hidden w-8/12 md:w-6/12 h-10 md:h-12'>
                <input onChange={handleSearch} type="text" className='block w-full pr-4' placeholder='جستجوی دوره ...' />
                <button className='block  bg-magnifier bg-[length:30px_30px] bg-no-repeat bg-center  rounded-none w-10 md:w-12  text-white p-2.5 px-4 bg-zgh'></button>
              </div>            
            }


            <div className={st }>
              {status === 'success' && (
                  <Course refetch={refetch} courseList={data?.courseFilterDtos}/>

                // data.courseFilterDtos.map((item , index)=>{
                //   return(
                //     <Course key={index} courseShape={courseShape} status={status} idx={item.courseId} courseName={item.title}  teacher={item.teacherName}
                //      date={item.date} src={item.tumbImageAddress} likeCount={item.likeCount} userIsLiked={item.userIsLiked} userLikedId={item.userLikedId}
                //      userFavorite={item.userFavorite} pageNumber={pageNumber} search={search} getCourseList={getCourseList} refetch={refetch}/>          
                //   )
                //   })                 
              )}

            </div>
    
            {parentShape == 'courses' && (
              status === 'success' && (
                <div className='mt-8'>
                  <Pagination total={data.totalCount} pageSize={4} showQuickJumper defaultCurrent={pageNumber} onChange={pageSize=>{changeStart(pageSize)}}/>
                </div>            
                    
              )               
            )}


        </section>
      )
}

export default Allcourse