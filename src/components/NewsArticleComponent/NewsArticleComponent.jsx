import React, { useState } from 'react'
import NewsArticleItem from './NewsArticleItem'



const NewsArticleComponent = () => {
  const [NewsArticleList , setNewsArticleList] = useState([
    {title:'آموزش ریکت با استاد جدید' , desc:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است ' , pic:'NewsArticle.png' , teacher:'مریم مهاجر'},
    {title:'آموزش ریکت با استاد جدید' , desc:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است ' , pic:'NewsArticle.png' , teacher:'مریم مهاجر'},
    {title:'آموزش ریکت با استاد جدید' , desc:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است ' , pic:'NewsArticle.png' , teacher:'مریم مهاجر'},
    {title:'آموزش ریکت با استاد جدید' , desc:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است ' , pic:'NewsArticle.png' , teacher:'مریم مهاجر'},
    {title:'آموزش ریکت با استاد جدید' , desc:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است ' , pic:'NewsArticle.png' , teacher:'مریم مهاجر'},
    {title:'آموزش ریکت با استاد جدید' , desc:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است ' , pic:'NewsArticle.png' , teacher:'مریم مهاجر'},
  ])

  return (
<div className=' flex flex-wrap justify-around  container border w-11/12 mx-auto mt-12'>
    {NewsArticleList.map((item , index)=>{
      return(
        <NewsArticleItem key={index} title={item.title} desc={item.desc} pic={item.pic} teacher={item.teacher}/>        
      )
    })}




</div>
  )
}

export default NewsArticleComponent