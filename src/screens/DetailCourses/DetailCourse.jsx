import { useState } from "react";
// import { ListArticleDetail } from "./ListArticleDetail";
import { SliderRelationNews } from "./SliderRelationNews";
import { Space, Tabs, Divider } from "antd";
// import myStyles from  '/src/menuTabs.module.css';
import "/src/menuTabs.css";
import { InsertComment } from "./InsertComment";
import { Comments } from "./Comments";
import {BsFillCheckCircleFill, BsFillArrowDownCircleFill,} from "react-icons/bs";
import http from '../../core/services/interceptor'
import {useQuery} from 'react-query'
import { useParams } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';



const DetailCourse = () => {

  const {id} = useParams();



  const courseInfo =async () =>{
    const result = await http.get(`/Home/GetCourseDetails?CourseId=${id}`)
    return result;
  }

  const {data , status} = useQuery(['courseInfo' , id] , courseInfo )

  


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



  



  return (
    <>
    
      {/* Global Container */}
      <div className="w-full flex  flex-col  font-irSans bg-zinc-100 mx-auto p-5 ">
        {/* Top Container */}
        {/* sm:flex-row */}
        <div className="flex flex-col-reverse md:flex-row">
          {/* Right Side */}
          <div className="w-full flex flex-col gap-6 lg:w-2/3  mx-auto justify-center">
            <div className="flex  flex-col md:flex-row justify-start gap-6   md:gap-16  lg:gap-28">
              {/*title */}
              <div className="flex gap-2 md:flex-col">
                <p className="text-sm font-bold whitespace-nowrap font-irSans">
                  عنوان دوره :
                </p>
                <p className="text-[13px] font-semibold whitespace-nowrap font-irSans">
                   {status === 'success' && data.title}
                </p>
              </div>
              {/*category */}
              <div className="flex  gap-2 md:flex-col">
                <p className="text-sm font-bold whitespace-nowrap font-irSans">
                   دسته بندی :
                </p>
                <p className="text-[13px] font-semibold whitespace-nowrap font-irSans">
                   {status === 'success' && data.courseLevelName}                  
                </p>
              </div>
            </div>
            {/*content article right side */}
            <div className="flex flex-col">
              <p className="text-sm font-bold font-irSans"> توضیحیات :</p>
              <p className="text-sm text-justify font-irSans">
                   {status === 'success' && data.describe}  
              </p>
            </div>
            {/*end content article right side */}

            {/*More Information  Section*/}
            <div className="flex flex-col gap-3">
              <div>
                <p className="font-bold text-sm  font-irSans">اطلاعات بیشتر:</p>
              </div>
              <div className="flex flex-col gap-3 pr-2">
                <div className="flex flex-row gap-2">
                  <BsFillCheckCircleFill className=" rounded-full text-secondary w-4 h-4" />

                  <p className="text-[13px]  font-bold font-irSans">
                    تاریخ  شروع :
                  </p>
                  <span className=" text-[13px]">
                     {status === 'success' && data.startTime}                     
                  </span>
                </div>

                <div className="flex flex-row gap-2">
                  <BsFillCheckCircleFill className=" rounded-full text-secondary w-4 h-4" />
                  <p className="text-[13px]  font-bold font-irSans">
                    تاریخ  پایان : 
                  </p>
                  <span className="text-[13px] font-irSans">
                     {status === 'success' && data.endTime}                      
                  </span>
                </div>

                <div className="flex flex-row gap-2">
                  <BsFillCheckCircleFill className=" rounded-full text-secondary w-4 h-4" />
                  <p className="text-[13px]  font-bold font-irSans">
                      مدرس : 
                  </p>
                  <span className="text-[13px] font-irSans">
                     {status === 'success' && data.teacherName}                      
                  </span>
                </div>

                <div className="flex flex-row gap-2">
                  <BsFillCheckCircleFill className=" rounded-full text-secondary w-4 h-4" />
                  <p className="text-[13px]  font-bold font-irSans">
                      ظرفیت : 
                  </p>
                  <span className="text-[13px] font-irSans">
                     {status === 'success' && data.capacity}                      
                  </span>
                </div>

                <div className="flex flex-row gap-2">
                  <BsFillCheckCircleFill className=" rounded-full text-secondary w-4 h-4" />
                  <p className="text-[13px]  font-bold font-irSans">
                      توضیحات : 
                  </p>
                  <span className="text-[13px] font-irSans">
                     {status === 'success' && data.describe}                      
                  </span>
                </div>




                
                <div className="flex flex-row gap-2">
                  <button onClick={()=>handleReserve(id)}  className='border-2 text-white bg-zgh rounded-xl p-2 px-2 md:px-4 m-2'>ثبت دوره</button>
                </div>
                
              </div>
            </div>
            {/*end More Information  Section*/}
          </div>
          {/* end Right Side */}
          {/* Left Side */}
          <div>
            {/* Images */}
            <div className="w-full  mx-auto justify-center  ">
              <img
                src="/public/assets/img/detailNewsPic.webp"
                className="mx-auto justify-center"
                alt="newsPic"
              />
            </div>
          </div>
          {/* end Left Side */}
        </div>
        {/* end Top Container */}

        {/*Border Split Top and Below*/}
        <div className="w-full mt-14 mb-6">
          <div className="w-full  border-2 border-gray-200"></div>
          <div className="mx-auto relative bottom-4  items-center  bg-zinc-100  w-fit h-fit px-3">
            <p className="text-sm text-center font-irSans md:text-lg">
              اخبار مرتبط
            </p>
          </div>
        </div>
        {/* end Border Split Top and Below */}

        {/*The ListOf Related news and articles */}
        <div className="">
          {/* <ListArticleDetail articelList={articelList} /> */}
          <SliderRelationNews  />
        </div>
        {/* end The ListOf Related news and articles */}
        <div className="flex justify-center">
          <BsFillArrowDownCircleFill className="rounded-full text-[#a5a5a5] w-8 h-8 md:w-12 md:h-12 relative  top-8 md:top-10" />
        </div>
      </div>
      {/*end Global Container */}
    </>
  );
};
export { DetailCourse };
