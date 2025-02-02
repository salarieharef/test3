import { CheckCircleOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import React from 'react'
import { motion } from 'framer-motion'

const Detail = ({title1 , title1Desc , title2 , title2Desc , title3 , title3Desc , title4 , title4Desc  , title5  , 
                title6 , title6Desc , title7 , title7Desc , title8 , title8Desc , title9 , title9Desc , title10 , title10Desc , logoSize}) => {
                    return (
                        <motion.div
                        initial={{x:100}}
                        animate={{x:0}}
                        transition={{duration:0.5}}
                        className='w-10/12 mx-auto lg:w-7/12 '>
                          <div className='sm:flex flex-wrap'>
                            <div className=' text-center sm:text-right  sm:w-1/2 mt-12 sm:pr-10'>
                              <h2 className='text-lg sfont-extrabold'>  {title1}</h2>
                              <h5 className='text-lg font-medium mt-2'> {title1Desc} </h5>
                            </div>
                            <div className=' text-center sm:text-right sm:w-1/2 mt-12 pr-2 sm:pr-10'>
                              <h2 className='text-lg font-extrabold'> {title2}</h2>
                              <h5 className='text-lg font-medium mt-2'>{title2Desc}  </h5>
                            </div>
                          </div>
                    
                            <h2 className='block text-center sm:text-right text-lg font-extrabold w-full mt-14 sm:mt-8 sm:mr-10'>  {title3}</h2>
                            <p className=' sm:text-lg text-justify sm:mr-10 mt-8'>
                              {title3Desc}
                            </p>
                    
                            <h2 className='block text-lg text-center sm:text-right font-extrabold w-full mt-8 sm:mr-10'>اطلاعات بیشتر :</h2>
                    
                            <p className=' sm:mr-10 text-center sm:text-right mt-6 font-extrabold'>
                              <CheckCircleOutlined  style={{fontSize:20 , color:'#CCA349'}}/>
                                <span className='text-center  text-xl sm:text-right  font-extrabold mr-4'>
                                  {title4}
                                </span>
                    
                                <div className=' sm:inline'  style={{direction: "ltr"}}>
                                  <span className='text-center sm:text-right text-lg font-bold  sm:mr-2'>
                                    {title4Desc}             
                                  </span>          
                      
                                  {/* {title5 ? 
                                    <div className='inline'>
                                      <span className='sm:mr-4 mr-1 bg-green-300 p-1 text-xs'>
                                        {title5}
                                      </span>
                                    </div>            
                                  : null } */}
                                </div>
                    
                            </p>
                    
                    
                    
                            <p className='sm:mr-10 text-center sm:text-right mt-6 font-extrabold'>
                            <CheckCircleOutlined  style={{fontSize:20 , color:'#CCA349'}}/>
                              <span className='text-center  text-xl sm:text-right  font-extrabold mr-4'>
                                {title6}
                              </span>
                              <span className='block sm:inline text-center sm:text-right text-lg font-bold  sm:mr-2'>
                                  {title6Desc}            
                              </span>
                            </p>
                    
                    
                            {title7 ?
                              <p className='sm:mr-10 text-center sm:text-right mt-6 font-extrabold'>
                              <CheckCircleOutlined  style={{fontSize:20 , color:'#CCA349'}}/>
                                <span className='text-center  text-xl sm:text-right  font-extrabold mr-4'>
                                  {title7} 
                                </span>
                                <span className='block sm:inline text-center sm:text-right text-lg font-bold  sm:mr-2'>
                                  {title7Desc}              
                                </span>
                              </p>      
                            : null}
                    
                    
                            {title8 ? 
                              <p className='sm:mr-10 text-center sm:text-right mt-6 font-extrabold'>
                              <CheckCircleOutlined  style={{fontSize:20 , color:'#CCA349'}}/>
                                <span className='text-center  text-xl sm:text-right  font-extrabold mr-4'>
                                    {title8}
                                </span>
                                <span className='block sm:inline text-center sm:text-right text-lg font-bold  sm:mr-2'>
                                  {title8Desc}                
                                </span>
                              </p>      
                            : null}
                    
                            
                            {title9 ? 
                              <p className='sm:mr-10 text-center sm:text-right mt-6 font-extrabold'>
                                <CheckCircleOutlined  style={{fontSize:20 , color:'#CCA349'}}/>
                                  <span className='text-center  text-xl sm:text-right  font-extrabold mr-4'>
                                    {title9} 
                                  </span>
                                  <span className=' block sm:inline text-center sm:text-right text-lg font-bold  sm:mr-2'>
                                    {title9Desc}             
                                  </span>
                              </p>  
                            :null}
                    
                    
                            {title10 ?
                              <p className='sm:mr-10 text-center sm:text-right mt-6 font-extrabold'>
                                <CheckCircleOutlined  style={{fontSize:20 , color:'#CCA349'}}/>
                                  <span className='text-center  text-xl sm:text-right  font-extrabold mr-4'>
                                      {title10}   
                                  </span>
                                  <span className=' block sm:inline text-center sm:text-right text-lg font-bold  sm:mr-2'>
                                    {title10Desc}              
                                  </span>
                              </p>  
                            : null} 
                    
                          {/* <Button  backgroundColor='bg-green-300' borderWidth='border-0' rounded='rounded-sm' paddingX='px-20' title='ـبت دوره' extra='mr-10 mt-6'/> */}
                    
                        </motion.div>
                      )
}

export default Detail