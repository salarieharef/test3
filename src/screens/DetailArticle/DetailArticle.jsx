import { useState } from "react";
// import { ListArticleDetail } from "./ListArticleDetail";
import { SliderRelationNews } from "./SliderRelationNews";
import { Space, Tabs, Divider } from "antd";
// import myStyles from  '/src/menuTabs.module.css';
import "/src/menuTabs.css";
import { InsertComment } from "./InsertComment";
import { Comments } from "./Comments";
import { motion } from "framer-motion";
import NewsArticle from "../../../public/NewsArticle.png";

import { BsFillCheckCircleFill } from "react-icons/bs";
import {
  FaHeart,
  FaHeartBroken,
  FaRegHeart,
  FaThumbsDown,
  FaThumbsUp,
} from "react-icons/fa";
import { useMutation } from "react-query";
import instance from "../../core/services/interceptor";
import toast from "react-hot-toast";
import ReactStars from "react-rating-stars-component";

const DetailArticle = ({ data, refetch }) => {
  // console.log(data);
  const onLikeMutate = useMutation(() =>
    instance
      .post(`/News/NewsLike/${data?.id}`)
      .then((res) => res.success === "true" && toast.success(res.message))
  );

  const onDislikeMutate = useMutation(() =>
    instance
      .post(`/News/NewsDissLike/${data?.id}`)
      .then((res) => res.success === "true" && toast.success(res.message))
  );

  const onChangeRatingMutate = useMutation((newRating) => {
    instance
      .post(`/News/NewsRate?NewsId=${data?.id}&RateNumber=${newRating}`)
      .then((res) => {
        res.success === true && toast.success(res.message);
        res.error === true && toast.success(":خطا",res.message);
      });
  });

  const onAddFavMutate = useMutation(() => {
    instance.post(`/News/AddFavoriteNews?NewsId=${data?.id}`).then((res) => {
      res.success === true && toast.success(res.message);
      res.error === true && toast.success(":خطا",res.message);
    });
  });

  const onِDeleteFavMutate = useMutation(() => {
    instance.delete(`/News/DeleteFavoriteNews`, {deleteEntityId: data?.id}).then((res) => {
      res.success === true && toast.success(res.message);
      res.error === true && toast.success(":خطا",res.message);
    });
  });

  onAddFavMutate.isError && toast.error("خطا")

  const handleLikeClick = (bool) => {
    if (bool == false) {
      onLikeMutate.mutate();
      refetch();
    }
  };

  const handleDislikeClick = (bool) => {
    if (bool == false) {
      onDislikeMutate.mutate();
      refetch();
    }
  };

  const handleFaveClick = (bool) => {
    console.log(bool);
    if (bool == false) {
      onAddFavMutate.mutate();
      refetch();
    } else {
      onِDeleteFavMutate.mutate()
      refetch()
    }
  };

  const onChangeNewsRate = (newRating) => {
    onChangeRatingMutate.mutate(newRating);
  };

  return (
    <>
      {/* Global Container */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="w-full flex  flex-col  font-irSans bg-zinc-100 mx-auto p-5 dark:bg-slate-600 ">
        {/* Top Container */}
        {/* sm:flex-row */}
        <div className="flex flex-col-reverse md:flex-row">
          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="w-full flex flex-col gap-6 lg:w-2/3  mx-auto justify-center   ps-4">
            <div className="flex  flex-col md:flex-row justify-start gap-6   md:gap-16  lg:gap-28 ">
              {/*title */}
              <div className="flex gap-2 md:flex-col">
                <p className="text-sm font-bold whitespace-nowrap font-irSans">
                  عنوان خبر :
                </p>
                <p className="text-[13px] font-semibold whitespace-nowrap font-irSans">
                  {data?.title}
                </p>
              </div>
              {/*category */}
              <div className="flex  gap-2 md:flex-col">
                <p className="text-sm font-bold whitespace-nowrap font-irSans">
                  دسته خبر :
                </p>
                <p className="text-[13px] font-semibold whitespace-nowrap font-irSans">
                  مقاله
                </p>
              </div>
            </div>
            {/*content article right side */}
            <div className="flex flex-col">
              <p className="text-sm font-bold font-irSans">متن خبر :</p>
              <p className="w-4/5 text-sm text-justify font-irSans">
                {data?.describe}
              </p>
            </div>
            {/*end content article right side */}

            {/*More Information  Section*/}
            <div className="flex flex-col gap-3">
              <div>
                <p className="font-bold text-sm  font-irSans">اطلاعات بیشتر:</p>
              </div>
              <div className="flex flex-col gap-3 pr-2">
                <div className="flex flex-row gap-2">
                  <BsFillCheckCircleFill className=" rounded-full text-secondary w-4 h-4" />

                  <p className="text-[13px]  font-bold font-irSans">
                    نویسنده :
                  </p>
                  <span className=" text-[13px]">
                    {data?.addUserFullName.replace("-", " ")}
                  </span>
                </div>
                <div className="flex flex-row gap-2">
                  <BsFillCheckCircleFill className=" rounded-full text-secondary w-4 h-4" />

                  <p className="text-[13px]  font-bold font-irSans">
                    تاریخ انتشار خبر :
                  </p>
                  <span className=" text-[13px]">
                    {data?.updateDate.slice(0, 10)}
                  </span>
                </div>
                <div className="flex flex-row gap-2">
                  <BsFillCheckCircleFill className=" rounded-full text-secondary w-4 h-4" />
                  <p className="text-[13px]  font-bold font-irSans">
                    دسته بندی:
                  </p>
                  <span className="text-[13px] font-irSans">مقاله</span>
                </div>
                <div className="flex w-4/5 justify-between flex-row gap-2">
                  <div className="flex justify-between flex-row gap-2">
                    <BsFillCheckCircleFill className=" rounded-full text-secondary w-4 h-4" />
                    <p className="text-[13px]  font-bold font-irSans">
                      تعداد بازدید :
                    </p>
                    <span className=" text-[13px]">{data?.currentView}</span>
                  </div>
                  <div className="flex justify-between items-center flex-row gap-2">
                    <p className="text-[13px]  font-bold font-irSans">
                      امتیاز خبر:
                    </p>
                    <ReactStars
                      count={5}
                      value={data?.currentRate}
                      onChange={onChangeNewsRate}
                      size={24}
                    />
                  </div>
                </div>
                <div className="flex flex-row gap-2">
                  <div
                    className="flex flex-row cursor-pointer"
                    onClick={() => handleFaveClick(data?.isCurrentUserFavorite)}>
                    {data?.isCurrentUserFavorite ? (
                      <FaHeart className=" text-red-500 w-4 h-4" />
                    ) : (
                      <FaHeart className=" text-secondary w-4 h-4" />
                    )}
                    <p className="text-[13px] mx-2 font-bold font-irSans">
                      {data?.isCurrentUserFavorite ? "حذف از لیست علاقمندی‌ها" : "افزودن به علاقمندی‌ها"}
                    </p>
                  </div>
                  <div
                    className="flex flex-row mx-6 cursor-pointer"
                    onClick={() => handleLikeClick(data?.currentUserIsLike)}>
                    {data?.currentUserIsLike ? (
                      <FaThumbsUp className=" text-red-500 w-4 h-4" />
                    ) : (
                      <FaThumbsUp className=" text-secondary w-4 h-4" />
                    )}
                    <p className="text-[13px] mx-2 font-bold font-irSans">
                      تعداد لایک :
                    </p>
                    <span className=" text-[13px]">
                      {data?.currentLikeCount}
                    </span>
                  </div>
                  <div
                    className="flex flex-row  cursor-pointer"
                    onClick={() =>
                      handleDislikeClick(data?.currentUserIsDissLike)
                    }>
                    {data?.currentUserIsDissLike ? (
                      <FaThumbsDown className=" text-red-500 w-4 h-4" />
                    ) : (
                      <FaThumbsDown className=" text-secondary w-4 h-4" />
                    )}
                    <p className="text-[13px] mx-2 font-bold font-irSans">
                      تعداد دیسلایک :
                    </p>
                    <span className=" text-[13px]">
                      {data?.currentDissLikeCount}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/*end More Information  Section*/}
          </motion.div>
          {/* end Right Side */}
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}>
            {/* Images */}
            {/* <div className="w-full  mx-auto justify-center  "> */}
            <img
              src={
                data?.currentImageAddress == null
                  ? NewsArticle
                  : data?.currentImageAddress
              }
              className="mx-auto justify-center max-w-2xl max-h-96"
              alt="newsPic"
            />
            {/* </div> */}
          </motion.div>
          {/* end Left Side */}
        </div>
        {/* end Top Container */}

        {/*Border Split Top and Below*/}
        <motion.div className="w-full mt-14 mb-6">
          <div className="w-full  border-2 border-gray-200"></div>
          <div className="mx-auto relative bottom-4  items-center  bg-zinc-100  w-fit h-fit px-3">
            <p className="text-sm text-center font-irSans md:text-lg dark:text-slate-800">
              اخبار مرتبط
            </p>
          </div>
        </motion.div>
        {/* end Border Split Top and Below */}

        {/*The ListOf Related news and articles */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="">
          {/* <ListArticleDetail articelList={articelList} /> */}
          <SliderRelationNews />
        </motion.div>
        {/* end The ListOf Related news and articles */}
        {/* <div className="flex justify-center">
          <BsFillArrowDownCircleFill className="rounded-full text-[#a5a5a5] w-8 h-8 md:w-12 md:h-12 relative  top-8 md:top-10" />
        </div> */}
      </motion.div>
      {/*end Global Container */}
    </>
  );
};
export { DetailArticle };
