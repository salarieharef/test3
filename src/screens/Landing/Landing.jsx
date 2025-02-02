import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import Button from "../../components/common/button/button";
import Services from "../../components/Services/Services";
import Dastes from "../../components/daste/dastes";
import AllCourse from "../../components/allcourse/allcourse";
import TeachersSlider from "../../components/teachersSlider/teachersSlider";
import News from "../../components/News/News";
import Article from "../../components/Article/Article";
import PishForm from "../../components/PishForm/PishForm";

const Landing = () => {
  return (
    <div className="font-irSans px-4">
      {/* Introduction accademy */}
      <motion.section
        initial={{ y: -1000 }}
        animate={{ y: 0 }}
        className="md:flex justify-center gap-x-6"
      >
        <div className="  md:w-2/5 w-full">
          <img src="./assets/big2.png" alt="jdth" className="md:pt-20 lg:pt-0" />
        </div>

        <div className="md:mr-24  md:pt-32 md:w-1/3 w-full px-6 text-center md:text-right lg:pt-32">
          <h2 className="text-lg font-extrabold">
            <span className=" text-zgh">آکادمی</span> بحر
          </h2>
          <p>
          آموزشگاه برنامه‌نویسی بحر، جایی برای یادگیری مهارت‌های تخصصی برنامه‌نویسی و ورود به دنیای فناوری! 
          </p>
          <p>
          ما با دوره‌های عملی و پروژه‌محور در حوزه‌های فرانت‌اند، بک‌اند، هوش مصنوعی و توسعه موبایل، شما را برای بازار کار آماده می‌کنیم. 
          </p>
          <p>
          مدرسین ما از متخصصان صنعت هستند و در طول مسیر یادگیری، پشتیبانی کامل ارائه می‌دهند.
          </p>
          <p>
          با ما، از یادگیری تا اشتغال، یک قدم فاصله دارید
          </p>
          <Link to='/courses'>
            <Button
              title="مشاهده دوره ها"
              paddingX="px-6"
              paddingY="py-3"
              rounded="rounded-md"
              extra="mt-6 text-sm"
            />
          </Link>

        </div>
      </motion.section>

      {/* our Services */}
      <motion.section
        initial={{ x: 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className=" flex flex-wrap flex-col-2 justify-evenly text-center mt-20 pb-14  bg-line bg-no-repeat bg-top-4 bg-80"
      >
        <h2 className="mb-12 w-full text-xl  font-extrabold">خدمات ما</h2>

        <Services />
      </motion.section>

      {/* daste */}
      <motion.section
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className=" mx-auto flex flex-wrap justify-evenly px-8 text-center mt-32 w-full lg:w-10/12 xl:w-2/3"
      >
        <h2 className=" w-full text-2xl mb-4"> دسته بندی</h2>

        <Dastes />
      </motion.section>

      {/* courses */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mt-24 text-xl text-center"
      >
        <h2 className=" w-full text-2xl font-bold mb-16 "> دوره های آموزشی </h2>

        <AllCourse parentShape="landing" courseShape="landing" />

        <Link to="/courses">
          <Button
            title="مشاهده دوره ها"
            paddingX="p-4"
            paddingY="p-4"
            extra="mx-auto mt-12"
          />
        </Link>
      </motion.section>

      {/* best teacher */}
      <motion.section
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-justify px-2 sm:px-16  "
      >
        <h2 className="text-center text-2xl  my-24 "> اساتید برتر</h2>

        <TeachersSlider />
      </motion.section>

      {/* NewsAndArticle */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mt-32 text-justify"
      >
        <h2 className="text-center text-2xl w-full">اخبار و مقالات</h2>

        <div className="flex flex-wrap xl:flex-nowrap gap-12 lg:px-48">
          <div className="flex flex-wrap  items-center w-10/12 xl:w-10/12 mx-auto my-8 gap-4">
            <h3 className="  w-1/12">مقالات </h3>
            <span className="border-8 h-4 w-10/12 "></span>

            <Article />
          </div>
        </div>
      </motion.section>

      {/* pish */}
      <section className="mt-12 ">
        <h2 className="text-center w-full text-2xl my-8">پیشنهادات و شکایات</h2>
        <div className=" flex flex-wrap flex-col-reverse lg:flex-row lg:flex-nowrap gap-4   mx-auto">
          <motion.div
            initial={{ x: 10, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className=" w-full lg:w-1/2 "
          >
            <PishForm />
          </motion.div>

          <motion.div
            initial={{ x: -10, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className=" w-full lg:w-1/2"
          >
            <img
              className="w-8/12 mx-auto lg:mr-16 rounded-2xl"
              src="./pish.png"
              alt=""
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
