import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useSelector , useDispatch } from 'react-redux'

const LastStep = ({step , setStep}) => {
    const navigate = useNavigate()
    const user = useSelector(state => state.user)
    console.log(user);

    const goLogin = () => {
         navigate("/login" )
    }

    const goLast = (e) =>{
        event.preventDefault()        
        if(step > 0){
          setStep(step-1)      
        }
      } 

  return (
    <div className='text-center'>
        <h2 className='mt-12'>ثبت نام با موفقیت انجام شد</h2>
        <button onClick={goLogin} className='mt-8 py-2 px-10 mx-4 text-white rounded-xl bg-green-400'>ورود</button>
        <button onClick={goLast}  className='py-2 px-10 mx-4 text-white rounded-xl bg-red-400'>بازگشت</button>        
    </div>
  )
}

export default LastStep