import React from "react";
import { DetailCourse } from "./DetailCourse";
import { Comments } from "./Comments";
import { InsertComment } from "./InsertComment";
import { useState } from "react";
 import { useParams } from "react-router-dom";
import http from '../../core/services/interceptor'
import {useQuery} from 'react-query'

const CourseMenuDetail = () => {
  //  const {id} = useParams();
  const [details, setDetails] = useState(true);
  const [comments, setComments] = useState(false);
  const [insertComment, setInsertComment] = useState(false);

  // const courseInfo =async () =>{
  //   const result = await http.get(`/Home/GetCourseDetails?CourseId=` + id )
  //   return result;
  // }

  //const {data , status} = useQuery('courseInfo' , courseInfo )

   //status === 'success' && console.log(data);



  const detailShowHandler = () => {
    setDetails(true);
    setComments(false);
    setInsertComment(false);
  };
  const commentShowHandler = () => {
    setDetails(false);
    setComments(true);
    setInsertComment(false);
  };
  const insertShowHandler = () => {
    setDetails(false);
    setComments(false);
    setInsertComment(true);
  };

  return (
    <section className="w-full md:w-5/6 px-2 md:px-4 mx-auto">
      {/* top nav */}
      <ul className="flex bg-[#f3f3f3] w-full justify-center  md:w-max px-2 py-2 ">
        <li
          onClick={detailShowHandler}
          className={
            details
              ? "px-4 after:w-full after:h-0.5  after:md:h-1 relative after:bg-secondary after:absolute after:-bottom-2 after:left-0  font-irSans md:text-lg font-bold "
              : "after:hidden px-4 font-irSans text-[12px] md:text-lg  whitespace-nowrap cursor-pointer "
          }
        >
          جزئیات دوره
        </li>
        <li
          onClick={commentShowHandler}
          className={
            comments
              ? "px-4 after:w-full after:h-0.5  after:md:h-1 relative after:bg-secondary after:absolute after:-bottom-2 after:left-0 font-irSans  text-lg  font-bold"
              : "after:hidden  px-4 font-irSans  text-[15px] md:text-lg  whitespace-nowrap  cursor-pointer"
          }
        >
          نظرات
        </li>
        <li
          onClick={insertShowHandler}
          className={
            insertComment
              ? "px-4 after:w-full after:h-0.5  after:md:h-1 relative after:bg-secondary after:absolute after:-bottom-2 after:left-0 font-irSans text-lg font-bold"
              : "after:hidden  px-4 font-irSans text-[15px] md:text-lg whitespace-nowrap  cursor-pointer"
          }
        >
          درج نظر
        </li>
      </ul>
      {/* body Page */}
      <section className="flex flex-col md:flex-row-reverse bg-[#f3f3f3]">
        {details && <DetailCourse  />}
        {comments && <Comments />}
        {insertComment && <InsertComment />}
      </section>
    </section>
  );
};

export { CourseMenuDetail };
