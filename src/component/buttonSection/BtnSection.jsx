import React from 'react'
import PreBtn from './PreBtn'
import NextBtn from './NextBtn'
import { button } from 'framer-motion/client'
import PagingBtn from './PagingBtn'

const BtnSection = ({index, setIndex, setUserData ,page}) => {
  return (
    <div className='flex gap-2 justify-center mt-5 '>
      <PreBtn index={index} setIndex={setIndex} setUserData={setUserData} />
      {
        page.map((ele,idx)=>{
         return <PagingBtn key={idx} setIndex={setIndex} ele={ele} index={index}/>
          
        })
      }
      <NextBtn index={index} setIndex={setIndex} setUserData={setUserData}/>
     </div>
  )
}

export default BtnSection
