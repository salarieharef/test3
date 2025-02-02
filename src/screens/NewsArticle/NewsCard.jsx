import React from "react";
import { FaEye, FaHeartBroken } from "react-icons/fa";
import { BsBookHalf } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import { FaUserEdit } from "react-icons/fa";

const NewsCard = ({
  id,
  title,
  nameWriter,
  view,
  description,
  pic,
  isLiked,
  isDisLiked,
  onClick,
}) => {
  const handleLikeClick = () => {
    if (isLiked) {
      isLiked = false;
      console.log(isLiked);
    } else {
      isLiked = true;
      console.log(isLiked);
    }
  };
  return (
    <>
      {/* border border-bg-[#ffffff] */}
      <div onClick={onClick} className="xl:w-1/6 lg:w-1/5 md:w-1/4  xs:w-full sm:w-1/3  mx-auto justify-center shadow-lg  shadow-bg-[#ffffff] dark:shadow-shadowDarkFront  rounded-md p-3 cursor-pointer">
        {/* Image */}
        <div className="relative w-full mx-auto justify-center pb-4 cursor-default">
          <img className="w-full object-cover" src={pic} alt="NewsPic" />
          <div className="absolute bottom-6 right-2 p-1 bg-slate-500 rounded-full bg-opacity-70 cursor-pointer">
            {isLiked ? (
              <span className="text-xl text-red-500" onClick={handleLikeClick}>
                <FaHeart />
              </span>
            ) : (
              <span className="text-xl text-white " onClick={handleLikeClick}>
                <FaRegHeart />
              </span>
            )}
          </div>
          <div className="absolute bottom-6 left-2 p-1 bg-slate-500 rounded-full bg-opacity-70 cursor-pointer">
            {isDisLiked ? (
              <span className="text-xl text-red-500" onClick={handleLikeClick}>
                <FaHeartBroken />
              </span>
            ) : (
              <span className="text-xl text-white " onClick={handleLikeClick}>
                <FaHeartBroken />
              </span>
            )}
          </div>
        </div>
        {/* Text below the photo */}
        <div className="mx-auto">
          {/* Title */}
          <div className="">
            <p className=" flex justify-center text-justify xs:text-sm  font-bold whitespace-nowrap pb-2 md:text-[11px] lg:text-[12px] sm:text-[12px] truncate">
              {title}
            </p>
          </div>
          {/* Description */}
          <div className="mx-auto ">
            <p className=" text-justify text-xs  pb-2  truncate">
              {description}
            </p>
          </div>
          {/* Writer and View */}
          <div className="flex justify-between ">
            {/* Writer*/}
            <div className="flex gap-1">
              <FaUserEdit className=" text-secondary text-[18px]" />
              <p className=" text-justify  text-[13px] text-[#5eabee]  font-semibold ">
                {nameWriter}
              </p>
            </div>
            {/*View */}
            <div className="flex gap-1">
              <p className=" text-justify  text-[11px]  text-[#68a4d8] font-bold">
                {view}
              </p>
              <FaEye className="text-secondary  text-sm md:text-xs" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { NewsCard };
