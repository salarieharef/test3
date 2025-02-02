import React, { useState } from 'react'
import SingleNewsAndArticle from '../common/SingleNewsAndArticle/SingleNewsAndArticle'
import http from '../../core/services/interceptor'
import { useQuery } from 'react-query'


const News = () => {
    const [newsList , setNewsList] = useState([
        { pic:'./news.png' , desc:'م ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله و برای شرایط فعلی تکنولوژی مورد نیاز و کاربرد  ' },
        { pic:'./news.png' , desc:'م ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله و برای شرایط فعلی تکنولوژی مورد نیاز و کاربرد  ' },
        { pic:'./news.png' , desc:'م ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله و برای شرایط فعلی تکنولوژی مورد نیاز و کاربرد  ' },
    ])

    const getNewsList = async () =>{
        const result = await http.get('/News')
        return result;
  
    }
  
    const {data , status} = useQuery('newsQuery' , getNewsList)

 

  return (
    <>
        {status === 'success' &&(
            data.news.map((item , index)=>{
                return(
                    <SingleNewsAndArticle key={index} pic={item.img} desc={item.describe}/>                
                )
            })  
        )}

    </>
  )
}

export default News