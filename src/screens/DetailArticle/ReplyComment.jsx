import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getCommentReplyByNewsId } from "../../core/services/api/newsComments";

function ReplyComment({ defaultData, parentId }) {
  const { data, status } = useQuery({
    queryKey: "replyComment",
    queryFn: () => {
      const res = getCommentReplyByNewsId(parentId);
      return res;
    },
  });

  if (status === "loading" && status === "error") {
    <>
      <CommentSkeleton />
      <CommentSkeleton />
      <CommentSkeleton />
    </>
  }

  return (
    <>
      {data?.map((reply, index) => {
        return (
          <div key={index} className="flex">
            <img
              src="/public/assets/img/academi.jpg"
              alt="academi"
              className="w-[32px] h-[32px]  rounded-full  relative  top-2 md:top-8  right-10   md:w-12 md:h-12 md:right-16"
            />
            <div className="w-full pt-4 h-[120px] p-3 md:h-[150px] border rounded-md  boreder-bgDetail  text-base  focus:outline-none focus:border-bgFocusText focus:ring-1 focus:ring-bgFocusText  bg-white">
              <div className="flex flex-col gap-4 pr-2 md:pr-[14px] pt-6 md:pt-0">
                <p className="flex flex-row gap-2    text-[14px] md:pr-12 md:text-md font-irSans  whitespace-nowrap font-bold">
                  {status === "success" ? (
                    <div className="md:text-lg">{reply?.title}</div>
                  ) : (
                    <div class="h-2 bg-gray-200 animate-pulse rounded-full dark:bg-gray-700 w-5/6 mb-4"></div>
                  )}
                  <span className="text-gray-300 px-3">|</span>
                  {status === "success" ? (
                    <div className="md:text-sm">
                      {reply?.inserDate.slice(0, 10)}
                    </div>
                  ) : (
                    <div class="h-2 bg-gray-200 animate-pulse rounded-full dark:bg-gray-700 w-5/6 mb-4"></div>
                  )}
                </p>
                {status === "success" ? (
                  <p className="flex flex-col gap-2   text-sm md:pr-12 md:text-[16px] font-irSans text-gray-800 ">
                    {reply?.describe}
                  </p>
                ) : (
                  <div class="h-10 bg-gray-200 animate-pulse rounded-full dark:bg-gray-700 w-5/6 mb-4"></div>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default ReplyComment;
