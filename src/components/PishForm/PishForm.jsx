import React, { useState } from 'react'
import { Button, Checkbox, Form, Input   } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { Formik, useFormik , ErrorMessage  } from 'formik';
import * as yup from 'yup'

const PishForm = () => {
  const [pishData , setPishData] = useState('');

  const validation = yup.object().shape({
    email:yup.string().email('فرمت ایمیل درست نیست').min(4 , 'حداقا 4 کاراکتر'),
    text:yup.string().min(6 , 'حداقا 6 کاراکتر'),
  })

  const onSubmit = (values)=>{

    setPishData(values)
   // console.log(pishData);  
  }
  return (

  <Formik onSubmit={onSubmit} initialValues={{email: "" , text: "",}} validationSchema={validation}>
    {({values , handleSubmit , handleChange})=>(
            <form onSubmit={handleSubmit} className=' shadow-xl mx-auto lg:mr-48 mt-12 pt-6 px-4 sm:px-12 w-8/12 dark:bg-slate-700 rounded-2xl dark:text-stone-200 font-irSans dark:shadow-shadowDarkUp'     >
      
            <label htmlFor='d1'>ایمیل شما</label>
            <Form.Item id='d1' className='w-full  mt-4 rounded-xl' name="email" rules={[{ required: true, message: 'Please input your username!',},]}>
            <Input name='email' value={values.email} onChange={handleChange} 
              className='w-full h-14 text-xl p-4' style={{direction:'ltr'}} placeholder='Maryammohajer@gmail.com'/>
              <ErrorMessage name='email'/>
            </Form.Item>
  
            <label htmlFor='d2'>متن پیام شما</label>
            <Form.Item id='d2' className='mt-4'>
              <TextArea name='text'  value={values.text} onChange={handleChange} 
              className='h-24 rounded-xl' style={{direction:'ltr' , height:'160px' ,minHeight:'100px'}}/>
              <ErrorMessage name='text'/>
            </Form.Item>
  
            <Form.Item >
              <Button htmlType="submit"  type="primary" className='bg-send font-irSans rounded-xl mx-auto mb-8 px-6 pt-0 h-10 block text-lg '>ارسال</Button>
            </Form.Item>
            
        </form>  
    )}

  </Formik>

   


  )
}

export default PishForm