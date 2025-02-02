import React from "react";
import { useEffect, useState } from "react";
import { QueryClient, useInfiniteQuery, useQuery } from "react-query";
import { getAllNews, getInfiniteAllNews } from "../../core/services/api/news";
import { useInView } from "react-intersection-observer";
import { ListNewsCards } from "./ListNewsCards";
import { Button, Dropdown, Pagination, Space } from "antd";
import SearchCourses from "../../components/common/search/SearchCourses";
import { BsFillCalendarCheckFill } from "react-icons/bs";
import http from "../../core/services/interceptor";
import { useRef } from "react";

// import "react-datepicker/dist/react-datepicker.css";
// import { DatePickerPersian } from "../../components/common/datePicker/DatePickerPersian"
// import "../../datepicker.css";

const NewsArticle = () => {
  const qClient = new QueryClient();
  const [search , setSearch] = useState('')
  const ref = useRef();

  const handleSearch = (e) =>{
    clearTimeout(ref.current)

   const timeOut = setTimeout(()=>{
    e.target.value && setParams({...params, Query: e.target.value})
   },800)

    !e.target.value && setParams({...params, Query: ''})

    ref.current = timeOut
  }

  const [params, setParams] = useState({
    PageNumber: 1,
    RowsOfPage: 10,
    SortingCol: "InsertDate",
    SortType: "DESC",
    Query: search,
  });


  const { data, isLoading, status } = useQuery({
    queryKey: ["newsList", params],
    queryFn: () => {
      return getAllNews(params).then((data) => {
        // console.log(data.news);
        return data;
      });
    },
  });

  // data && console.log('oooooooooooo' , data)

  const changeStart = (pageSize) =>{
    setParams({...params, PageNumber: pageSize}) ;
  } 

  // const {
  //   status,
  //   data,
  //   isLoading,
  //   isFetchingNextPage,
  //   fetchNextPage,
  //   fetchPreviousPage,
  //   hasNextPage,
  //   hasPreviousPage,
  // } = useInfiniteQuery(
  //   ["newsList", params],
  //   async () => {
  //     return getInfiniteAllNews(params).then((data) => {
  //       return data.news;
  //     });
  //   },
  //   {
  //     // getPreviousPageParam: (firstPage) => firstPage.previousId ?? undefined,
  //     getNextPageParam: (pageParam) => (pageParam += 1),
  //   }
  // );

  // React.useEffect(() => {
  //   if (inView) {
  //     fetchNextPage();
  //   }
  // }, [inView]);

  return (
    <div className="font-irSans">
      {/* Global Container */}
      <div className="flex w-full flex-col items-center  mx-auto p-5 gap-4">
        {/* Images */}
        <div className="w-full mx-auto justify-center ">
          <img
            src="/public/assets/img/newsPic-removebg.png"
            className="mx-auto justify-center cursor-pointer "
            alt="newsPic"
          />
        </div>
        {/* Title and Input Seach  */}
        <div className="w-full flex flex-col items-center  gap-4">
          <p className="mx-auto font-bold  text-lg sm:text-2xl md:text-4xl">
            اخبار و مقالات
          </p>
          {/* <AntdInputSearch className="flex  justify-items-center mx-auto placeholder:font-irSans placeholder:font-light placeholder:text-[10px] md:w-[400px]" /> */}
          <div className='border mx-auto  flex rounded-lg  overflow-hidden w-8/12 md:w-6/12 h-10 md:h-12'>
                <input onChange={handleSearch} type="text" className='block w-full pr-4' placeholder='جستجوی دوره ...' />
                <button className='block  bg-magnifier bg-[length:30px_30px] bg-no-repeat bg-center  rounded-none w-10 md:w-12  text-white p-2.5 px-4 bg-zgh'></button>
              </div>     
        </div>
        {/*end Title and Input Seach  */}
        {/* filter newsArticle */}
        {/* <div className="flex  w-full gap-2 mr-2 mt-4">
          <div className="flex text-[#131b1f] text-[11px] md:text-sm  bg-white  cursor-pointer select-none items-center rounded-xl border border-[#dddedf] pr-2  pl-2 md:pr-4  md:pl-4 font-light relative bottom-2 h-[30px]">
            <BsFillCalendarCheckFill className=" text-[#a5a5a5] w-4 h-4 ml-2 mr-2" /> */}
        {/* <DatePickerPersian size="large xs:default" />  */}
        {/* <p
              className="font-bold font-irSans text-gray-400 hover:text-gray-600"
              id="dateFilter">
              تاریخ انتشار
            </p>
          </div>
        </div> */}
        {/* end filter newsArticle */}
        {/*border Spliter  */}
        <div className="w-full mt-1 mb-1">
          <div className="w-full   border-[1px]  border-[#f3f0f0]"></div>
          <div className="mx-auto relative bottom-4  items-center  bg-zinc-100  w-fit h-fit px-3"></div>
        </div>
        {/*End border Spliter  */}

        {/* SortBy newsArticle */}
        <div className="flex w-full gap-[14px]  mb-[30px] h-[40px] ">
          <span
            onClick={() => {
              qClient.invalidateQueries("newsList");
              setParams({ ...params, SortingCol: "currentView" });
            }}
            className=" text-xs text-gray-400  hover:text-gray-600 md:text-sm font-irSans cursor-pointer mb-1 border rounded-3xl  border-[#dddedf] bg-white pt-[.5625rem]  pb-[.5625rem] pr-2 pl-2 md:pr-4 md:pl-4 font-bold leading-4">
            <label htmlFor="mostVisited" className="cursor-pointer">
              پربازدیدترین
            </label>
          </span>
          <span
            onClick={() => {
              qClient.invalidateQueries("newsList");
              setParams({ ...params, SortingCol: "updateDate" });
            }}
            className=" text-xs text-gray-400  hover:text-gray-600 md:text-sm font-irSans cursor-pointer mb-1 border rounded-3xl  border-[#dddedf] bg-white pt-[.5625rem]  pb-[.5625rem] pr-2 pl-2 md:pr-4 md:pl-4 fd font-bold leading-4">
            <label htmlFor="newest" className="cursor-pointer">
              جدیدترین
            </label>
          </span>
          <span className=" text-xs text-gray-400  hover:text-gray-600 md:text-sm font-irSans cursor-pointer -mt-1 mb-1 border rounded-3xl  border-[#dddedf] bg-white pt-[.5625rem]  pb-[.5625rem] pr-2 pl-2 md:pr-4 md:pl-4 fd font-bold leading-4">
            <select
              name="sort"
              // value={sort}
              onChange={(e) => {
                qClient.invalidateQueries("newsList");
                setParams({
                  ...params,
                  SortType: e.target.value,
                });
              }}>
              <option defaultValue disabled>
                ترتیب نمایش
              </option>
              <option value="ASC">صعودی</option>
              <option value="DESC">نزولی</option>
            </select>
          </span>
          <span
            onClick={() => {
              qClient.invalidateQueries("newsList");
              setParams({
                ...params,
                SortingCol: "InsertDate",
                SortType: "DESC",
              });
            }}
            className=" text-xs text-gray-400  hover:text-gray-600 md:text-sm font-irSans cursor-pointer mb-1 border rounded-3xl  border-[#dddedf] bg-white pt-[.5625rem]  pb-[.5625rem] pr-2 pl-2 md:pr-4 md:pl-4 fd font-bold leading-4">
            <label htmlFor="newest" className="cursor-pointer">
              حذف فیلتر
            </label>
          </span>
        </div>
        {/* end SortBy newsArticle */}

        {/*The ListOf News and Articels */}

        <ListNewsCards
          status={status}
          data={data?.news}
          isLoading={isLoading}
        />

        {/*Button More */}
        <div>
          {/* <Button
            ref={ref}
            onClick={() => fetchNextPage()}
            disabled={!hasNextPage || isFetchingNextPage}
            className="border border-secondary  font-irSans ">
            {isFetchingNextPage
              ? "بارگذاری موارد بیشتر"
              : hasNextPage
              ? "بیشتر"
              : "پایان"}
          </Button> */}
          {status === "success" && (
            <div className="mt-8">
              <Pagination
                total={data.totalCount}
                pageSize={10}
                showQuickJumper
                defaultCurrent={params.PageNumber}
                onChange={(pageSize) => {
                  changeStart(pageSize);
                }}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default NewsArticle;
