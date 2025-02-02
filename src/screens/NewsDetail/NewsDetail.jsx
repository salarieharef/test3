import React from 'react'
import { Divider, Tabs } from 'antd'
import NewsDetailComponent from '../../components/NewsDetailComponent/NewsDetailComponent'


const NewsDetail = () => {
  return (
    <div className='w-5/6 mx-auto'>

        <Tabs>


          <Tabs.TabPane  tab='جزییات خبر' key='tab1'>
              <NewsDetailComponent/>
          </Tabs.TabPane>

          <Divider/>

          <Tabs.TabPane  tab='جزییات خبر' key='tab2'>
              <NewsDetailComponent/>            
          </Tabs.TabPane>


      </Tabs>   

    
    </div>
  )
}

export default NewsDetail