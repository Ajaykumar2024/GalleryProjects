import React from 'react'

const PagingBtn = ({index,ele,setIndex}) => {
  return (
    <button 
         disabled={index === ele}
         onClick={()=>{
          setIndex(ele)         
         }}
         className='bg-gray-500 px-4 py-3   rounded-lg active:scale-105 opacity-50 disabled:opacity-100  '>{ele}</button>
  )
}

export default PagingBtn
