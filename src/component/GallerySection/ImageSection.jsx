import React from 'react'
import Image from './Image'
import AuthorName from './AuthorName'

const ImageSection = ({ele}) => {
  return (
    <div >
        <a href={ele.url} target='_blank'>
            <Image ele={ele} />
            <AuthorName ele={ele} />
        </a>
    </div>
  )
}

export default ImageSection
