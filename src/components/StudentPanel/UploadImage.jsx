import React from "react";
import { Formik, Form, Field } from "formik";
import Button from "../common/button/button";
import http from "../../core/services/interceptor";
import { useQuery } from "react-query";
import toast, { Toaster } from 'react-hot-toast';

const UploadImage = () => {
  const handlePic = async (values) => {
    const data = new FormData();
    data.append("formFile", values.file);

    const result = await http.post(`/SharePanel/AddProfileImage`, data);
    
    if(result.success === true){
      toast.success(result.message)    
    }

    else if(result.success === false){
      toast.error(result.errors)       
    }

    console.log(result);
  };
  return (
    <div className="w-10/12  py-10 mx-auto my-10 font-irSans">
      <h2 className="mb-10 text-lg font-extrabold">آپلود عکس</h2>

      <div className="border border-gray-400 py-6 mt-24 rounded-2xl">
        <h2 className="mb-6">لطفا عکس مورد نظر خود را انتخاب کنید</h2>
        <Formik onSubmit={handlePic} initialValues={{ file: null }}>
          {({ values, handleSubmit, handleChange, setFieldValue }) => (
            <form onSubmit={handleSubmit}>
              <input
                name="file"
                type="file"
                onChange={(e) => {
                  setFieldValue("file", e.target.files[0]);
                }}
              />
              <Button
                type="submit"
                title="افزودن"
                backgroundColor="bg-green-400"
                borderWidth="border-none"></Button>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default UploadImage;
