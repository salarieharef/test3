import React, { useState } from 'react'
import http from '../../core/services/interceptor'
import {useQuery} from 'react-query'


const DashboardItem = ({title , pic}) => {
  return (
    <div className='shadow-xl sm:w-5/12 lg:w-1/4 p-2 mt-4 rounded-t-xl border-gray-400 '>
        <div className='border rounded-xl bg-pannel '>
          <img src={pic} className='mx-auto mt-6' alt="" />  
        </div> 
        <h2 className=' text-center  my-6 font-sans  font-extrabold mx-auto'>{title} </h2>  
    </div>
  )
}


const Dashboard = () => {

  const getProfileInfo = async () =>{
    const result = await http.get(`/SharePanel/GetProfileInfo`)
    return result;
    //console.log(result);
  }

  const {data , status} = useQuery('dashboard' , getProfileInfo  )

  status === 'success' && console.log(data);

  const [dashItem , setDashItem] = useState([
    {title:'سه دوره خریداری شده' , pic:'coursescount.png'},
    {title:'سه دوره خریداری شده' , pic:'coursescount.png'},
    {title:'سه دوره خریداری شده' , pic:'coursescount.png'},
    {title:'سه دوره خریداری شده' , pic:'coursescount.png'},
    {title:'سه دوره خریداری شده' , pic:'coursescount.png'},
    {title:'سه دوره خریداری شده' , pic:'coursescount.png'},
  ])
  return (
    <div className='px-6 mb-6 sm:flex sm:flex-wrap justify-around gap-2 font-irSans'>
      <h2 className='block w-full text-center text-lg font-extrabold my-20'>داشبورد</h2>
          {status === 'success' &&  <DashboardItem  title={data.fName + ' ' + data.lName}  pic={'coursescount.png'}/>}



    </div>
  )
}

export default Dashboard