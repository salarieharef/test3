import React, { useState } from "react";
import ReplyComment from "./ReplyComment";
import { Link } from "react-router-dom";
import {
  HandThumbDownIcon,
  HandThumbUpIcon,
} from "@heroicons/react/24/outline";
import { useMutation } from "react-query";
import { postLikeCommentById } from "../../core/services/api/newsComments";
import toast, { Toaster } from "react-hot-toast";

function UserComment({ data, status, refetch, qClient }) {
  const [showReply, setShowReply] = useState(false);

  const likeComment = useMutation({
    mutationFn: (id, likeType) => postLikeCommentById(id, likeType),
  });

  const removeLike = () => {
    likeComment.mutate({ id: data.id, likeType: false });
    likeComment.isError &&
      toast.error("عملیات موفقیت آمیز نبود، لطفا بعدا تلاش کنید");

    if (likeComment.isSuccess) {
      qClient.invalidateQueries("comments");
      toast.success("عملیات با موفقیت انجام شد");
    }
    refetch();
  };

  const addLike = () => {
    likeComment.mutate({ id: data.id, likeType: true });
    likeComment.isError
      ? toast.error("عملیات موفقیت آمیز نبود، لطفا بعدا تلاش کنید")
      : toast.success("عملیات با موفقیت انجام شد");
    refetch();
  };

  return (
    <>
      <div className="flex">
        <img
          src="/public/assets/img/academi.jpg"
          alt="academi"
          className="w-[32px] h-[32px]  rounded-full relative top-8 left-1 md:left-2 md:w-12 md:h-12"
        />
        <div className="w-full  h-[120px] p-3 md:h-[150px] border rounded-md  boreder-bgDetail   text-base focus:outline-none focus:border-bgFocusText focus:ring-1 focus:ring-bgFocusText bg-white">
          <div className="flex flex-col gap-4 pr-2">
            <div className="flex flex-row items-center gap-2 text-[14px] md:text-lg font-irSans whitespace-nowrap font-bold">
              {status === "success" ? (
                <div className="md:text-lg leading-6">{data.title}</div>
              ) : (
                <div class="h-2 bg-gray-200 animate-pulse rounded-full dark:bg-gray-700 w-5/6 mb-4"></div>
              )}

              <span className="text-gray-300 px-4">|</span>

              {status === "success" ? (
                <div className="md:text-sm leading-2">
                  {data.inserDate.slice(0, 10)}
                </div>
              ) : (
                <div class="h-2 bg-gray-200 animate-pulse rounded-full dark:bg-gray-700 w-5/6 mb-4"></div>
              )}
            </div>
            {status === "success" ? (
              <p className="pt-2 text-md font-irSans text-gray-800 text-clip">
                {data.describe}
              </p>
            ) : (
              <div class="h-10 bg-gray-200 animate-pulse rounded-full dark:bg-gray-700 w-5/6 mb-4"></div>
            )}
          </div>

          <div className="flex justify-end items-center">
            {data.replyCount > 0 && (
              <div
                onClick={() => {
                  setShowReply(true);
                }}
                className="text-sm leading-6 text-zinc-100 bg-secondary px-4 py-1 font-irSans rounded-lg hover:bg-yellow-600 hover:text-white hover:shadow-md hover:shadow-yellow-700 transition-all duration-200 cursor-pointer">
                <span>نمایش پاسخ</span>
              </div>
            )}
            <div className="flex px-3">
              {data.commentLike > 0 ? (
                <HandThumbUpIcon
                  onClick={() => removeLike()}
                  className="w-6 h-6 text-teal-600"
                />
              ) : (
                <HandThumbUpIcon
                  onClick={() => addLike()}
                  className="w-6 h-6"
                />
              )}
              <span className="px-2">{data.commentLike}</span>
            </div>
          </div>
        </div>
      </div>
      {setShowReply === true && <ReplyComment parentId={data.id} />}
      <Toaster position="top-left" reverseOrder={false} />
    </>
  );
}

export default UserComment;
