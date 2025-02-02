import React, { useState } from "react";
import { Formik, Field } from "formik";
import { Input, Select } from "antd";
import TextArea from "antd/es/input/TextArea";
import Button from "../common/button/button";
import http from "../../core/services/interceptor";
import { useQuery } from "react-query";
import toast, { Toaster } from 'react-hot-toast';

const EditProfile = () => {
  const [newDetail, serNewDetail] = useState();

  const onSubmit = async (values) => {
    const data = new FormData();

    const person = {
      LName: values.lname,
      FName: values.fname,
      UserAbout: values.desc,
      LinkdinProfile: "",
      TelegramLink: "",
      ReceiveMessageEvent: true,
      HomeAdderess: values.address,
      NationalCode: values.NationalCode,
      Gender: true,
      BirthDay: "1999-02-08T00:00:00",
      Latitude: "",
      Longitude: "",
    };

    const keys = Object.keys(person);
    keys.forEach((key) => {
      const item = person[key];
      data.append(key, item);
      //console.log(data);
    });

    const result = await http.put(`/SharePanel/UpdateProfileInfo`, data);

    if(result.success === true){
      toast.success(result.message)    
    }

    else if(result.success === false){
      toast.error(result.errors)       
    }
    
    console.log(result);

    //window.location.reload(false);
  };
  return (
    <div className=" w-10/12  py-10 mx-auto my-10 font-irSans">
      <h2 className="mb-10 text-lg font-extrabold">حساب کاربری</h2>
      <Formik
        onSubmit={onSubmit}
        initialValues={{
          fname: "",
          lname: "",
          NationalCode: "",
          gender: true,
          born: "",
          job: "",
          city: "",
          email: "",
          address: "",
          desc: "",
        }}>
        {({ values, handleSubmit, handleChange, setFieldValue }) => (
          <form
            onSubmit={handleSubmit}
            className=" lg:justify-between lg:px-4 lg:gap-4">
            <div className=" mt-4 lg:w-5/12">
              <label
                className="block text-center lg:text-right lg:pr-4"
                htmlFor="fname">
                نام
              </label>
              <Input
                type="text"
                id="fname"
                name="fname"
                value={values.fname}
                onChange={handleChange}
                className=""
              />
            </div>

            <div className=" mt-4 lg:w-5/12">
              <label
                className="block text-center lg:text-right lg:pr-4"
                htmlFor="lname">
                نام خانوادگی
              </label>
              <Input
                type="text"
                id="lname"
                name="lname"
                value={values.lname}
                onChange={handleChange}
              />
            </div>

            <div className=" mt-4 lg:w-5/12">
              <label
                className="block text-center lg:text-right lg:pr-4"
                htmlFor="NationalCode">
                کد ملی{" "}
              </label>
              <Input
                type="text"
                id="NationalCode"
                name="NationalCode"
                value={values.NationalCode}
                onChange={handleChange}
              />
            </div>

            <div className=" mt-4 lg:w-1/4">
              <label className="block text-center lg:text-right lg:pr-4">
                {" "}
                جنسیت{" "}
              </label>

              <label
                className="inline text-center lg:text-right lg:pr-4"
                htmlFor="gender1">
                {" "}
                مرد{" "}
              </label>
              <Field type="radio" name="gender" id="gender1" value="true" />
              <label
                className="inline text-center lg:text-right lg:pr-4"
                htmlFor="gender2">
                {" "}
                زن{" "}
              </label>
              <Field type="radio" name="gender" id="gender2" value="false" />
            </div>

            <div className=" mt-4 lg:w-1/4">
              <label
                className="block text-center lg:text-right lg:pr-4"
                htmlFor="born">
                {" "}
                سال تولد
              </label>
              <Input
                type="text"
                id="born"
                name="born"
                value={values.born}
                onChange={handleChange}
              />
            </div>

            <div className=" mt-4 lg:w-1/4">
              <label
                className="block text-center  lg:text-right lg:pr-4"
                htmlFor="job">
                {" "}
                شغل
              </label>
              <Input
                type="text"
                id="job"
                name="job"
                className="w-full"
                value={values.job}
                onChange={handleChange}
              />
            </div>

            <div className=" mt-4 lg:w-1/4">
              <label
                className="block text-center lg:text-right lg:pr-4"
                htmlFor="city">
                {" "}
                شهر{" "}
              </label>
              <Input
                type="text"
                id="city"
                name="city"
                className="w-full"
                value={values.city}
                onChange={handleChange}
              />
            </div>

            <div className=" mt-4 lg:w-5/12">
              <label
                className="block text-center lg:text-right lg:pr-4"
                htmlFor="address">
                {" "}
                آدرس{" "}
              </label>
              <Input
                type="text"
                id="address"
                name="address"
                value={values.address}
                onChange={handleChange}
              />
            </div>

            <div className=" mt-4 lg:w-full">
              <label
                className="block text-center lg:text-right lg:pr-4"
                htmlFor="desc">
                {" "}
                توضیحات{" "}
              </label>
              <TextArea
                id="desc"
                name="desc"
                value={values.desc}
                onChange={handleChange}
                style={{
                  height: "200px",
                  minHeight: "100px",
                  maxHeight: "300px",
                }}
              />
            </div>

            <div className=" mt-4 w-full flex flex-col sm:flex-row flex-wrap  sm:justify-start gap-4 ">
              <Button
                type="submit"
                title="ثبت"
                backgroundColor="bg-green-400"
                borderWidth="border-none"></Button>
              {/* <Button title='حذف' backgroundColor='bg-red-400' borderWidth='border-none'></Button>  */}
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default EditProfile;
