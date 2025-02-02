import React from "react";
import { BsFillCalendarCheckFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const SingleArticleDetail = ({ id, title, date, pic, onClick, name }) => {
  const navigate = useNavigate();
  return (
    <div onClick={onClick} className="font-irSans cursor-pointer">
      {/* 2xl: xl:w-1/7 lg:w-1/6 md:w-1/5 sm:w-1/4   mx-auto  */}
      <div className="w-full flex  flex-col justify-center items-center border border-bg-[#ffffff] rounded-md p-5 bg-white ">
        {/* Image */}
        <div className="w-full flex justify-center pb-2  flex-grow">
          <img
            src={pic}
            alt="NewsPic"
            className=" rounded-full object-cover w-36 h-36 p-3  mx-auto  "
          />
        </div>
        <div className="flex flex-col items-center gap-4">
          {/* Title */}
          <p className=" text-justify  text-sm  font-bold  whitespace-nowrap md:text-[13px] md:font-bold  lg:text-sm ">
            {title}
          </p>
          {/* Date */}
          <div className="flex gap-2">
            <BsFillCalendarCheckFill className=" text-[#a5a5a5]  w-3 h-3 " />
            <p className=" text-justify  text-xs  font-bold   whitespace-nowrap pb-2 text-secondary">
              {date.slice(0, 10)}
            </p>
            <BsFillCalendarCheckFill className=" text-[#a5a5a5]  w-3 h-3 " />
            <p className=" text-justify  text-xs  font-bold   whitespace-nowrap pb-2 text-secondary">
              {name.slice(0, 11)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export { SingleArticleDetail };
