import React from "react";

const SearchCourses = ({
  backgroundColor = "bg-zgh",
  placeholder = "جستجوی دوره ...",
  width = "w-8/12 md:w-5/12",
  height = "h-14",
}) => {
  return (
    <div
      className={`border mx-auto  flex rounded-lg  overflow-hidden ${height} ${width}`}>
      <input className="block w-full pr-4" placeholder={placeholder} />
      <button
        className={` block  bg-magnifier bg-50 bg-no-repeat bg-center  w-14    text-white p-2.5 px-4  ${backgroundColor}`}></button>
    </div>
  );
};

export default SearchCourses;
