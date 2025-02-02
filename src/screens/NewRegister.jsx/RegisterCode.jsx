import React from "react";
import { Input } from "antd";
import { Formik, useFormik, ErrorMessage } from "formik";
import * as yup from "yup";
import { useSelector, useDispatch } from "react-redux";
import { useQuery } from "react-query";
import http from "../../core/services/interceptor";

const RegisterCode = ({ step, setStep }) => {
  const user = useSelector((state) => state.user);

  const onSubmit = async (values) => {
    const person = { phoneNumber: user.phoneNumber, verifyCode: values.number };

    const result = await http.post(`/Sign/VerifyMessage`, person);
    //return result;
    console.log(result.success);
    if (step < 3 && result.success === true) {
      setStep(step + 1);
    } else {
      alert("کد تایید صحیح نمیباشد");
    }
  };

  const goLast = (e) => {
    event.preventDefault();
    if (step > 0) {
      setStep(step - 1);
    }
  };

  const validation = yup.object().shape({
    number: yup
      .number("لطفا عدد وارد کنید")
      .required("لطفا این فیلد را پر کنید"),
  });

  return (
    <Formik
      onSubmit={onSubmit}
      initialValues={{ number: "" }}
      className="flex"
      validationSchema={validation}>
      {({ values, handleSubmit, handleChange }) => (
        <form onSubmit={handleSubmit}>
          <div className=" flex items-center justify-center font-irSans sm:p-0 w-full   xs:p-8">
            <div className="flex flex-col w-full p-12">
              <p className="mb-2 whitespace-nowrap  sm:text-base  xs:text-[14px] ">
                کد دریافت شده را وارد کنید
              </p>
              <Input
                name="number"
                value={values.number}
                onChange={handleChange}
                size="large  xs:default"
                placeholder="somayeh"
                className="text-center  border border-gray-400 rounded-md placeholder:font-sans placeholder:font-light"
              />
              <ErrorMessage name="number" />
            </div>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="py-2 px-10 mx-4 text-white rounded-xl bg-green-400">
              تایید
            </button>
            <button
              onClick={goLast}
              className="py-2 px-10 mx-4 text-white rounded-xl bg-red-400">
              بازگشت
            </button>
          </div>
        </form>
      )}
    </Formik>
  );
};

export default RegisterCode;
