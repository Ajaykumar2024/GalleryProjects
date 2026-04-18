import React from 'react'

const NextBtn = ({index, setIndex,setUserData}) => {
  return (
    <button
    disabled={index === 5}
      onClick={()=>{
          setIndex(index+1)
          setUserData([])
      }} 
      className='px-4 py-3 bg-amber-400 rounded-lg active:scale-105 disabled:opacity-50'
      >
        Next
    </button>
  )
}

export default NextBtn
