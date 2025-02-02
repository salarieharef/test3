import { Tabs } from "antd";
import "/src/menuTabs.css";
import { BsFillArrowDownCircleFill } from "react-icons/bs";
import { useState } from "react";
import { motion } from "framer-motion";
import { getItem } from "../../core/services/common/storage.services";
import { QueryClient, useQuery } from "react-query";
import http from "../../core/services/interceptor";
import UserComment from "./UserComment";
import { getCommentsByNewsId } from "../../core/services/api/newsComments";
import NoCommentsYet from "./NoCommentsYet";

const Comments = ({ id , changeToInsertComment}) => {
  const queryClient = new QueryClient();

  const { data, status, refetch } = useQuery({
    queryKey: "comments",
    queryFn: () => {
      const res = getCommentsByNewsId(id);
      return res;
    },
  });

  if (status === "loading" && status === "error") {
    <>
      <CommentSkeleton />
      <CommentSkeleton />
      <CommentSkeleton />
      <CommentSkeleton />
    </>;
  }

  return (
    <>
      {/* Global Container */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className=" w-full  items-center justify-center  bg-zinc-100 dark:bg-slate-600 mx-auto p-[26px]  pr-2 md:pr-[26px] space-y-10  md:p-12">
        <div className="w-full flex flex-col gap-8">
          {getItem("token") === "" || null || undefined ? (
            <div className=" bg-blue-200  ju rounded-md  align-middle mr-[20x]  py-2 md:py-4  px-4  md:px-8">
              <p className="  whitespace-nowrap   text-[12px]  md:text-lg  text-blue-800 font-irSans  font-bold">
                برای ثبت نظر باید وارد سایت شده باشید
              </p>
            </div>
          ) : (
            <></>
          )}

          {
            data?.length === 0 ? <NoCommentsYet changeToInsertComment={changeToInsertComment} /> :
            data?.map((cmnt, index) => { return (
              <UserComment key={index} data={cmnt} status={status} refetch={refetch()} qClient = {queryClient} />
              )})
          }
          {/*Boutton */}
          {/* <div className=" w-full">
            <button className="flex w-4/5  mx-auto  relative right-4 items bg-teal-600 dark:bg-teal-800 shadow-cyan-100 dark:shadow-shadowDarkUp whitespace-nowrap justify-center items-center p-3  py-1 space-x-4  font-bold text-white rounded-md  shadow-md px-9 hover:bg-opacity-90  hover:shadow-lg border transition   text-center hover:-translate-y-0.5 duration-150    md:px-6 md:py-2 md:w-1/4  md:relative md:right-3/4 md:mx-0 ">
              مشاهده نظرات بیشتر
            </button>
          </div> */}
        </div>
        {/* <div className="flex justify-center">
          <BsFillArrowDownCircleFill className="rounded-full text-[#a5a5a5] w-10 h-10 relative  top-12 md:top-16 md:w-12 md:h-12" />
        </div> */}
      </motion.div>
    </>
  );
};
export { Comments };
