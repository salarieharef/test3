import Input from "antd/es/input/Input";
import { Button } from "antd";
import React from "react";
import bgImg from "../../assets/images/forgot.png";
import { Form, Formik } from "formik";
import { KeyOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const ResetPassword = () => {
  const onSubmit = (values) => {
    console.log(values);
  };
  return (
    <div className="flex justify-center items-center w-full md:h-[100vh] bg-gradient-to-b from-primary dark:from-teal-800 font-irSans">
      <section className="flex flex-col-reverse md:flex-row justify-between container w-[80%] h-[80%] bg-white dark:bg-slate-600 rounded-3xl">
        <div className="w-[80%] md:w-[40%] flex flex-col  justify-center ms-14">
          <h3 className="mt-10 mb-16 md:mb-24 text-2xl font-semibold indent-6">
            تغییر رمز عبور
          </h3>
          <Formik className="w-[70%]" onSubmit={onSubmit} initialValues={{}}>
            <Form>
              <label htmlFor="fPass" className="">
                گذرواژه جدید خود را وارد کنید:
              </label>
              <Input
                id="fPass"
                name="fPass"
                className="w-[100%] mt-2 mb-7"
                type="password"
                allowClear
                suffix={<KeyOutlined className="site-form-item-icon" />}
              />
              <label htmlFor="sPass" className="">
                گذرواژه جدید خود را دوباره وارد کنید:
              </label>
              <Input
                id="sPass"
                name="sPass"
                className="w-[100%] mt-2"
                type="password"
                allowClear
                suffix={<KeyOutlined className="site-form-item-icon" />}
              />
              <div className="flex justify-around my-8 ">
                <Button
                  className=" bg-primary text-white active:text-white font-irSans"
                  type="primary"
                  htmlType="submit">
                  تغییر گذرواژه
                </Button>
                <Link to="/"><Button className="font-irSans dark:bg-slate-400">صفحه اصلی</Button></Link>
              </div>
            </Form>
          </Formik>
        </div>
        <div className="w-[80%] md:w-[40%] mx-auto flex items-center mt-5 md:mt-0 overflow-hidden">
          <img
            className="w-fit h-fit object-fit rounded-2xl"
            src={bgImg}
            alt="Reset Password"
          />
        </div>
      </section>
    </div>
  );
};

export default ResetPassword;
