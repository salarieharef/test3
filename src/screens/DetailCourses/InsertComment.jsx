import { Tabs , Input , Select } from "antd";
import TextArea from 'antd/es/input/TextArea';
import "/src/menuTabs.css";
import { BsFillArrowDownCircleFill } from "react-icons/bs";
import { Formik } from 'formik'
import http from '../../core/services/interceptor'
import {useQuery} from 'react-query'
import { useParams , useNavigate } from "react-router-dom";
import { clearStorage } from "../../core/services/common/storage.services";
import toast, { Toaster } from 'react-hot-toast';




const InsertComment = () => {
  const {id} = useParams();
  const navigate = useNavigate()


  const onSubmit =async (values) =>{

     const data = new FormData()
    try{


      const comment = {
        CourseId : id,
        Title : values.title,
        Describe : values.desc,
      }

      // data.append('CourseId' , 'id')
      // data.append('Title' , 'values.title')
      // data.append('Describe' , 'values.desc')

      const keys = Object.keys(comment)
      keys.forEach((key)=>{
        const item = comment[key]
        data.append(key , item)
        //console.log(data);
      })

      const result = await http.post(`/Course/AddCommentCourse` , data)
      if(result.success === true){
        toast.success(result.message)    
      }
  
      else if(result.success === false){
        toast.error(result.errors)       
      }
      
      console.log(result);
    }catch(error){
      clearStorage()
      navigate("/login" )
      console.log(error);
    }

  }
  return (
    <>
      <Formik onSubmit={onSubmit} className='w-full' initialValues={{title : '' , desc : ''}}>
      {({values , handleSubmit, handleChange }) =>(
        <form onSubmit={handleSubmit} className='w-full'>
          <div className="w-full font-irSans items-center justify-center  bg-[#f3f3f3] mx-auto p-8  md:p-12">

            <div className="w-full flex flex-col">

                  <label htmlFor="title">عنوان نظر</label>
                  <Input name="title" id="title" value={values.title} onChange={handleChange}
                  className="w-1/2 mb-8 mt-2 "
                  />


                  <label htmlFor="title">توزیح نظر</label>
                  <TextArea
                    name="desc" id="desc" value={values.desc} onChange={handleChange}
                    className="w-full mt-2 h-[120px] p-3 md:h-[150px] border rounded-md  boreder-[#f3f3f3] placeholder-[#a5a5a5]  font-irSans  text-base resize-none  placeholder:text-sm    md:placeholder:text-lg   focus:outline-none focus:border-bgFocusText focus:ring-1 focus:ring-bgFocusText"
                    placeholder="نظر خود را وارد نمایید..."
                  />
                  {/*Boutton */}
        
                    
                    {/* bg-bgBtnComment border-bgBtnComment  shadow-green-200 */}
                    <button type='submit' className="flex w-full   whitespace-nowrap justify-center items-center p-3  py-1 space-x-4  font-bold text-white rounded-md  shadow-lg px-9 bg-cyan-700 shadow-cyan-100 hover:bg-opacity-90  hover:shadow-lg border transition   text-center hover:-translate-y-0.5 duration-150    md:px-6 md:py-2 md:w-1/4  md:relative md: right-3/4 font-irSans">
                      ثبت دیدگاه شما
                    </button>
               
      

            </div>
            <div className="flex justify-center">
              <BsFillArrowDownCircleFill className="rounded-full text-[#a5a5a5] w-10 h-10 relative  top-12 md:top-16 md:w-12 md:h-12" />
            </div>
          </div>                     
        </form>
      )}
        {/* Global Container */}
   
      </Formik>

    </>
  );
};
export { InsertComment };
