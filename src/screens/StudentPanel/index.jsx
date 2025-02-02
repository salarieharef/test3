import React, { useEffect, useState } from "react";
import RightMenu from "../../components/StudentPanel/RightMenu.jsx";
import LeftLayout from "../../components/StudentPanel/LeftLayout.jsx";
import { motion } from "framer-motion"
import { getItem } from "../../core/services/common/storage.services.js";

const userInfo = {
  img: "https://shiftart.com/wp-content/uploads/2017/04/RC-Profile-Square-1000x1000.jpg",
  name: "مریم مهاجر",
  role: "ادمین",
};

const StudentPanel = () => {
  let [navigateTo, setNavigateTo] = useState("dash");

  // useEffect(() => {console.log(navigateTo);}, [navigateTo])

  if (getItem('token') === false || undefined || null) return <ErrorPage />

  return (
    <motion.div 
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{delay:0.5}}
    className="w-full mx-auto text-center my-10">
      <section className="sm:container mx-auto min-h-screen flex md:py-10">
        <RightMenu
          userInfo={userInfo}
          setNavigateTo={setNavigateTo}
        />
        <LeftLayout navigateTo={navigateTo}/>
      </section>
    </motion.div>
  );
};

export default StudentPanel;
