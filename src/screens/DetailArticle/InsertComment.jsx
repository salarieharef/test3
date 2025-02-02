import { Tabs } from "antd";
import "/src/menuTabs.css";
import { BsFillArrowDownCircleFill } from "react-icons/bs";
import { motion } from "framer-motion";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { useMutation } from "react-query";
import { useParams } from "react-router-dom";
import { postCommentUserById } from "../../core/services/api/newsComments";
import toast, { Toaster } from "react-hot-toast";

const validation = yup.object().shape({
  comment: yup
    .string()
    .required("لطفا متن نظر خود را وارد کنید.")
    .min(5, "تعداد کلمات ورودی کافی نیست"),
});

const InsertComment = () => {
  const newsId = useParams();

  const mutation = useMutation({
    mutationFn: (obj) => postCommentUserById(obj),
  });

  const addComment = (value) => {
    const obj = {
      newsId: newsId.id,
      title: "نظر شخصی",
      describe: value.comment,
    };
    mutation.mutate(obj);
    mutation.isError &&
      toast.error("عملیات موفقیت آمیز نبود، لطفا بعدا تلاش کنید");
    mutation.isSuccess && toast.success("عملیات با موفقیت انجام شد");
  };

  return (
    <>
      {/* Global Container */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="w-full items-center justify-center  bg-[#f3f3f3] dark:bg-slate-600 mx-auto p-8  md:p-12">
        <Formik
          initialValues={{ comment: "" }}
          onSubmit={(values) => addComment(values)}
          validationSchema={validation}
          className="w-full flex flex-col">
          <Form className="relative">
            <p className="font-semibold mb-2 whitespace-nowrap text-sm font-irSans">
              لطفا نظر خود را وارد کنید:
            </p>
            <Field
              name="comment"
              type="text"
              autoComplete="off"
              className="w-full  h-[120px] p-3 md:h-[150px] border rounded-md my-2 boreder-[#f3f3f3] placeholder-[#a5a5a5]  font-irSans  text-base resize-none  placeholder:text-sm    md:placeholder:text-lg   focus:outline-none focus:border-bgFocusText focus:ring-1 focus:ring-bgFocusText"
              placeholder="نظر خود را وارد نمایید..."
            />
            <ErrorMessage name="title" className="text-red-600 absolute" />
            {/*Boutton */}
            <div className="w-full mt-4 ">
              <button
                preventDefault
                type="submit"
                onClick={addComment}
                className="flex w-full mt-4 whitespace-nowrap justify-center p-3  py-1 space-x-4  font-bold text-white rounded-md  shadow-lg px-9 bg-teal-600 dark:bg-teal-800 shadow-cyan-100 dark:shadow-shadowDarkUp hover:bg-opacity-90  hover:shadow-lg border transition   text-center hover:-translate-y-0.5 duration-150    md:px-6 md:py-2 md:w-1/4  md:relative md: right-3/4 font-irSans">
                ثبت دیدگاه شما
              </button>
            </div>
          </Form>
        </Formik>
        {/* <div className="flex justify-center">
          <BsFillArrowDownCircleFill className="rounded-full text-[#a5a5a5] w-10 h-10 relative  top-12 md:top-16 md:w-12 md:h-12" />
        </div> */}
      </motion.div>
      <Toaster position="top-left" reverseOrder={false} />
    </>
  );
};
export { InsertComment };
