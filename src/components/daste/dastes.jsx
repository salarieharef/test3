import React, { useState } from 'react'
import Dast from './dast'

const Dastes = () => {
    const [dastesList , setDastesList] = useState([
        {name:'وب' , pic:'./d1.png'},
        {name:'آی تی' , pic:'./d2.png'},
        {name:'شبکه' , pic:'./d3.png'},
        {name:'امنیت' , pic:'./d4.png'},
        {name:'ریکت' , pic:'./d5.png'},
    ])
  return (
    <>
        {dastesList.map((item , index)=>{
            return(
                <Dast key={index} name={item.name}  pic={item.pic}/>
            )
        })}
    </>


  )
}

export default Dastes