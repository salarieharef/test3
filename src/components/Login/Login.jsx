import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Button, Input, Space } from "antd";
import { MailOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import { Field, Form, Formik } from "formik";
import {motion} from "framer-motion"
import { useNavigate } from "react-router";

const Login = () => {
  const [passwordVisible, setPasswordVisible] = React.useState(false);
  const navigate = useNavigate()
  
  const handleClick = () => {
    navigate("/studentPanel")
  }

  return (
    <>
      <Formik >
        <form>
          {/* Global Container */}
          {/* bg-teal-600 */}
          <div className=" global-container">
            {/* Card Container  */}
            <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.3}} className="card-container ">
              {/* Right Side */}
              <motion.div initial={{opacity:0, x:100}} animate={{opacity:1, x:0}} transition={{delay:0.3}} className="right-side-container ">
                <h1 className="">ورود کاربر</h1>
                {/* Right section Inputes */}
                <div className="mr-8 mt-5 sm:mr-6">
                  <p className="font-semibold mb-2 ">ایمیل</p>
                  <div className="flex">
                    <Input
                      size="large xs:default"
                      placeholder="Reaction@gmail.com"
                      dir="ltr"
                      prefix={<MailOutlined className="text-gray-400" />}
                      className=" mail-input-login dir=ltr"
                    />
                  </div>
                  <p className="font-semibold  mb-2">پسورد</p>
                  <Input.Password
                    placeholder="************"
                    className="password-input-login"
                    dir="ltr"
                    iconRender={(visible) =>
                      visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                    }
                  />
                  <div className="message-forgot ">
                    رمز عبورم را فرا موش کردم 
                  </div>
                  {/*Bouttons */}
                  <div className="flex mt-8 sm:ml-10">
                    <button className=" button-register">ثبت نام</button>
                    <button onClick={handleClick} className="button-login">ورود</button>
                  </div>
                </div>
              </motion.div>
              {/* left Side  */}
              <motion.div initial={{opacity:0, x:-100}} animate={{opacity:1, x:0}} transition={{delay:0.3}} className="left-side-container">
                <img
                  src="assets/img/loginPic.avif"
                  alt="loginPic"
                  className="w-max rounded-xl"
                />
              </motion.div>
            </motion.div>
          </div>
        </form>
      </Formik>
    </>
  );
};
export { Login };
