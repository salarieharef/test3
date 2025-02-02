import React, { useEffect, useState } from "react";
import { Field, Form, Formik } from "formik";
import { ContentChangePass } from "./ContentChangePass";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Button, Input, Space } from "antd";
import http from '../../core/services/interceptor'
import toast, { Toaster } from 'react-hot-toast';

const ChangePassword = () => {

  const changePasswordFunc =async (values)=>{
    const result = await http.post('/SharePanel/ChangePassword' , values)
    if(result.success === true){
      toast.success(result.message)    
    }

    else if(result.success === false){
      toast.error(result.errors)       
    }
    console.log(result);
  }

  return (
    <>
      <Formik onSubmit={changePasswordFunc} initialValues={{oldPassword : '' , newPassword : ''}}>
        {({values , handleSubmit , handleChange})=>(
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col gap-6 md:p-3">
                {/* Top img Side  */}
                <div className=" w-ful flex justify-center">
                  <img
                    src="/src/assets/images/changePass.jpg"
                    alt="ChangePassPic"
                    className="w-max rounded-2xl"
                  />
                </div>
                {/* end Top img Side  */}
                {/* Below Content Side */}
                    <div className=" w-ful flex  flex-col  gap-6 justify-center">
                      <h1 className="font-irSans font-bold  text-center text-[20px]  md:text-[26px] ">
                        تغییر رمز عبور
                      </h1>
                      <div className="flex flex-col gap-4  md:gap-8 p-6 md:p-3">
                    <div className="md:flex">
                      <p className="font-irSans mb-2 font-bold md:font-semibold  whitespace-nowrap  w-[135px] text-sm md:text-[16px]  pl-[46px]">
                        پسورد فعلی
                      </p>
                        <Input.Password
                          name="oldPassword"
                          value={values.oldPassword} onChange={handleChange}
                          size="default md:large md:py-2 "
                          placeholder="************"
                          className="flex-row-reverse  text-left  w-full  border border-gray-400 rounded-md placeholder:font-irSans placeholder:font-light cursor-pointer "
                          dir="ltr"
                          iconRender={(visible) =>
                            visible ? <EyeTwoTone/> : <EyeInvisibleOutlined />
                          }
                        />
                    </div>

                    <div className=" md:flex">
                      <p className="font-irSans mb-2 font-bold md:font-semibold   whitespace-wrap  md:whitespace-wrap  md:whitespace-nowrap  w-[135px] text-sm md:text-[16px] pl-[44px]">
                        پسورد جدید
                      </p>
                        <Input.Password
                            name="newPassword"
                            value={values.newPassword} onChange={handleChange}
                            size="default md:large md:py-2 "
                            placeholder="************"
                            className="flex-row-reverse  text-left  w-full  border border-gray-400 rounded-md placeholder:font-irSans placeholder:font-light cursor-pointer "
                            dir="ltr"
                            iconRender={(visible) =>
                              visible ? <EyeTwoTone/> : <EyeInvisibleOutlined />
                            }
                          />
                    </div>



                    {/*end Below Content Side */}
                    {/*Boutton */}
                    <div className=" w-full flex justify-center cursor-pointer  font-bold text-white mt-2  md:mt-0 rounded-md shadow-lg px-9 bg-cyan-700 shadow-cyan-100 hover:bg-opacity-90  hover:shadow-lg border transition    hover:-translate-y-0.5 duration-150 py-1 text-sm  md:text-[16px]    md:w-3/4   md:relative md:right-1/4  lg:w-[82.333%]   lg:right-[130px]  xl:w-[86.120%] xl:right-[127px]">
                      <button htmlType="submit" className="font-irSans py-1 md:py-2">ذخیره تغییرات</button>
                    </div>
                    {/*end Boutton */}
                  </div>
                </div>
              </div>
            </form>          
        )}

      </Formik>
    </>
  );
};

export default ChangePassword;
