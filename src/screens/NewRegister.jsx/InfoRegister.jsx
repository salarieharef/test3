import React from 'react'
import { Input } from "antd";
import { Formik, useFormik , ErrorMessage  } from 'formik';
import * as yup from 'yup'
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { useSelector , useDispatch } from 'react-redux'
import {onPhoneNumberChange , onEmailChange , onPasswordChange} from '../../redux/user'
import {useQuery} from 'react-query'
import http from '../../core/services/interceptor'


const InfoRegister = ({step , setStep}) => {
    const user = useSelector(state => state.user)

    const dispatch = useDispatch()


    const onSubmit =async (values)=>{
        dispatch(onEmailChange(values.email))
        dispatch(onPasswordChange(values.pass))
        const person = {
            password : values.pass,
            gmail : values.email,
            phoneNumber : user.phoneNumber,
        }

        const result = await http.post(`/Sign/Register` , person)

        console.log(result.success);



        if(step < 3){
          setStep(step+1)      
        }         
      }
    
      const goLast = (e) =>{
        event.preventDefault()        
        if(step > 0){
          setStep(step-1)      
        }
      } 

      const validation = yup.object().shape({
        email : yup.string().email().required('لطفا این فیلد را پر کنید'),
        pass : yup.string().required('لطفا این فیلد را پر کنید'),
      })

  return (
    <Formik onSubmit={onSubmit} initialValues={{email : '' , pass : ''}} className='flex' validationSchema={validation}>
        {({values , handleSubmit , handleChange}) => (
            <form onSubmit={handleSubmit} >
                <div className="  items-center justify-center font-irSans sm:p-0 w-full   xs:p-8">

                    <div className="flex flex-col w-full p-8">
                        <p className="mb-2 whitespace-nowrap  sm:text-base  xs:text-[14px] ">
                            لطفا ایمیل خود را وارد کنید
                        </p>
                        <Input
                        name='email' value={values.email} onChange={handleChange}
                        size="large  xs:default"
                        placeholder="somayeh"
                        className="text-center  border border-gray-400 rounded-md placeholder:font-sans placeholder:font-light"
                        />
                        <ErrorMessage name='email'/>
                    </div>

                    <div className="flex flex-col w-full p-8">
                        <p className="mb-2 whitespace-nowrap  sm:text-base  xs:text-[14px] ">
                            لطفا پسورد خود را وارد کنید
                        </p>
                        <Input.Password
                            name='pass' value={values.pass} onChange={handleChange}
                            size="large  xs:default"
                            placeholder="******************"
                            className="w-full flex-row-reverse  border border-gray-400 rounded-md placeholder:font-sans placeholder:font-light placeholder:align-middle "
                            dir="ltr"
                            iconRender={(visible) =>
                                visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                        }
                        />
                            <ErrorMessage name='pass'/>                        
                    </div>                    

                </div>
                <div className='text-center'>
                    <button type='submit' className='py-2 px-10 mx-4 text-white rounded-xl bg-green-400'>تایید</button>
                    <button onClick={goLast}  className='py-2 px-10 mx-4 text-white rounded-xl bg-red-400'>بازگشت</button>                    
                </div>

            </form>            
        )}
    </Formik>
  )
}

export default InfoRegister