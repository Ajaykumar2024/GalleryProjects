import React from 'react'
import ImageSection from './ImageSection'

const GallerySection = ({userData}) => {
  return (
    <div className='flex flex-wrap gap-7   '>
       {userData.map((ele,idx)=>{
        return <ImageSection ele={ele} key={idx} />
       })}
     </div>
  )
}

export default GallerySection
