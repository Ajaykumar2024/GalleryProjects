import React from 'react'

const Image = ({ele}) => {
  return (
    <div className='h-60 w-64  rounded-2xl  overflow-hidden hover:scale-105 transition-all  '> 
        <img  className='h-full w-full object-cover rounded  ' src={ele.download_url} alt="" />
    </div>
  )
}

export default Image
