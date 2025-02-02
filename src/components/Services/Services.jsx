import React, { useState } from 'react'
import Service from './Service'

const Services = () => {
    const [servicesList , setServicesList] = useState([
        {name:'آموزش' ,pic:'k3.png' , desc:'با بهترین استید'},
        {name:'پشتیبانی' ,pic:'k1.png' , desc:'با منتورهای باتجربه '},
        {name:'تمرین' ,pic:'k2.png' , desc:' با هم تمرین میکنیم'},
        {name:'آزمون' ,pic:'k4.png' , desc:' برای سنجش پیشرفتتون'},
    ])
  return (

    <>
        {servicesList.map((item , index)=>{
            return(
                <Service key={index} name={item.name} pic={item.pic} desc={item.desc}/>
            )
        })}
    </>
  )
}

export default Services