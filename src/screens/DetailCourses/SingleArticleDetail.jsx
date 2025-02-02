import React from "react";
import { BsFillCalendarCheckFill } from "react-icons/bs";

const SingleArticleDetail = ({ id, title, date }) => {
  return (
    <div className="font-irSans">
    {/* 2xl: xl:w-1/7 lg:w-1/6 md:w-1/5 sm:w-1/4   mx-auto  */}
      <div className="w-full flex  flex-col justify-center items-center border border-bg-[#ffffff] rounded-md p-5 bg-white ">
        {/* Image */}
        <div className="w-full flex justify-center pb-2  flex-grow">
          <img
            src="/public/assets/img/office.jpg"
            alt="NewsPic"
            className=" rounded-full w-36 h-36 p-3  mx-auto  "
          />
        </div>
       <div className="flex flex-col items-center gap-4">
         {/* Title */}
          <p className=" text-justify  text-sm  font-bold  whitespace-nowrap md:text-[13px] md:font-bold  lg:text-sm ">
            {title}
          </p>
        {/* Date */}
        <div className="flex gap-2">
        <BsFillCalendarCheckFill className=" text-[#a5a5a5]  w-4 h-4 "/>
          <p className=" text-justify  text-sm  font-bold   whitespace-nowrap pb-2 text-secondary">
            {date}
          </p>
        </div>
       </div>
      </div>
    </div>
  );
};

export { SingleArticleDetail };
