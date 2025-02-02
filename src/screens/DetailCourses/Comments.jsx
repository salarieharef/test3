import { Tabs } from "antd";
import "/src/menuTabs.css";
import { BsFillArrowDownCircleFill } from "react-icons/bs";
import { useState } from "react";
import http from '../../core/services/interceptor'
import {useQuery} from 'react-query'
import { useParams } from "react-router-dom";


const Comments = () => {
  const {id} = useParams();

  const CourseComment =async () =>{
    const result = await http.get(`/Course/GetCourseCommnets/${id}`)
    return result;

  }

  const {data , status} = useQuery('CourseComment'  , CourseComment )

 data && console.log(data);

  const questioncomm = {
    userName: "سمیه",
    userMsg: ":(سلام وقت بخیر, خبر واقعی بودنش ابهام داره؟",
    dateSend: "1402/07/26",
  };
  const responsecomm = {
    name: "مهدی اصغریان",
    msg: "سلام وقت بخیر،،پاسخ خبر رو ",
    date: "1402/07/26",
  };



  return (
    <>
      {/* Global Container */}
      <div className=" w-full  items-center justify-center  bg-zinc-100 mx-auto p-[26px]  pr-2 md:pr-[26px] space-y-10  md:p-12">
        <div className="w-full flex flex-col gap-8">
          <div className=" bg-blue-200  ju rounded-md  align-middle mr-[20x]  py-2 md:py-4  px-4  md:px-8">
            <p className="  whitespace-nowrap   text-[12px]  md:text-lg  text-blue-800 font-irSans  font-bold">
              برای ثبت نظر باید وارد سایت شده باشید
            </p>
          </div>
          {status === 'success' && (
            data.map((item , index)=>{
              return(
                <div key={index} className="flex">
                  <img
                    src="/public/assets/img/academi.jpg"
                    alt="academi"
                    className="w-[32px] h-[32px]  rounded-full relative top-8 left-1 md:left-2 md:w-12 md:h-12"
                  />
                  <div className="w-full  h-[120px] p-3 md:h-[150px] border rounded-md  boreder-bgDetail   text-base focus:outline-none focus:border-bgFocusText focus:ring-1 focus:ring-bgFocusText bg-white">
                    <div className="flex flex-col gap-4 pr-2">
                      <p className="flex flex-row gap-2 text-[14px] md:text-lg font-irSans whitespace-nowrap font-bold">
                        <div className="md:text-lg">{item.author}</div>
                        <span className="text-gray-300">{item.title}|</span>
                        <div className="md:text-sm"></div>
                      </p>
                      <p className="flex flex-col gap-2 text-[14px] font-irSans text-gray-800 ">
                        {item.describe}
                      </p>
                    </div>
                  </div>
                </div>    
              )
            })
            
          )}


          {/*Boutton */}
          <div className=" w-full">
            {/* bg-bgbtns shadow-bgShadowBtnComm */}
            <button className="flex w-4/5  mx-auto  relative right-4 items bg-cyan-700 shadow-cyan-100  whitespace-nowrap justify-center items-center p-3  py-1 space-x-4  font-bold text-white rounded-md  shadow-md px-9 hover:bg-opacity-90  hover:shadow-lg border transition   text-center hover:-translate-y-0.5 duration-150    md:px-6 md:py-2 md:w-1/4  md:relative md:right-3/4 md:mx-0 ">
              مشاهده نظرات بیشتر
            </button>
          </div>
        </div>
        <div className="flex justify-center">
          <BsFillArrowDownCircleFill className="rounded-full text-[#a5a5a5] w-10 h-10 relative  top-12 md:top-16 md:w-12 md:h-12" />
        </div>
      </div>
    </>
  );
};
export { Comments };
