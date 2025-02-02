import React from 'react'

function NewsListSkeleton() {
  const n = 10; // Or something else
  return (
    <div className="container animate-pulse mx-auto justify-center flex flex-wrap gap-6 p-3 lg:flex-row lg:flex-wrap">
        {[...Array(n)].map((e, i) => (
          <div key={i} className="xl:w-1/6 lg:w-1/5 md:w-1/4  xs:w-full sm:w-1/3  mx-auto justify-center shadow-lg  shadow-bg-[#ffffff] dark:shadow-shadowDarkFront  rounded-md p-3 cursor-pointer">
            <div className="w-full mx-auto justify-center pb-4 cursor-default">
              <svg
                className="w-full h-full text-gray-200 dark:text-gray-600"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 18">
                <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
              </svg>
            </div>
            <div className="h-5 bg-gray-200 rounded-full dark:bg-gray-700 w-3/4 mb-4"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-11/6 mb-4"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-5/6 mb-4"></div>
            <div className="flex justify-between">
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-3/6 mb-2"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-2/6 mb-2"></div>
            </div>
          </div>
        ))}
      </div>
  )
}

export default NewsListSkeleton