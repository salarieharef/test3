import React from 'react'
import { Divider, Tabs } from 'antd'
import CoursesDetailComponents from '../../components/coursesDetailComponents/coursesDetailComponents'
import { motion } from 'framer-motion'

const CoursesDetail = () => {
  return (
    <motion.div
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{duration:0.5}}
    className='w-5/6 mx-auto'>

        <Tabs className='font-irSans dark:text-stone-200'>


            <Tabs.TabPane  tab='جزییات دوره' key='tab1'>
                <CoursesDetailComponents/>
            </Tabs.TabPane>

            <Divider/>

            <Tabs.TabPane tab='جزییات دوره' key='tab2'>
                222222
            </Tabs.TabPane>


        </Tabs>   

    
    </motion.div>
  )
}

export default CoursesDetail