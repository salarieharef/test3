import React from "react";

function SearchItemSkeleton() {
  return (
    <div className="w-11/12 h-[120px] animate-pulse grid grid-cols-3 grid-rows-2 gap-4 shadow-shadowPrimaryFront cursor-pointer rounded-lg me-[6px]">
      <div className="col-span-1 row-span-2 my-2 ms-2 flex items-center justify-center w-11/12 h-11/12 rounded-lg bg-gray-300 dark:bg-gray-700">
        <svg
          className=" w-5/6 h-5/6 text-gray-200 dark:text-gray-600"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 18">
          <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
        </svg>
      </div>
      <div className="col-span-2 flex items-center indent-4 h-4.5 my-5 bg-gray-200 rounded-full dark:bg-gray-700 w-1/3 mb-4"></div>
      <div className="col-span-2 grid grid-cols-4 overflow-hidden text-sm">
        <div className="col-span-3 max-h-10 h-3 bg-gray-200 rounded-full dark:bg-gray-700 max-w-3/4 mb-2.5"></div>
        <div className="col-span-3 max-h-10 h-3 my-1 bg-gray-200 rounded-full dark:bg-gray-700 max-w-3/4 mb-2.5"></div>
      </div>
    </div>
  );
}

export default SearchItemSkeleton;
