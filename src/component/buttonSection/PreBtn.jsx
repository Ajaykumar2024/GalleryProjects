import React from 'react'

const PreBtn = ({index, setIndex, setUserData}) => {
  return (
    <button  disabled={index === 1}
      onClick={()=>{
          setIndex(index-1)
          setUserData([])
      }}
       className='px-6 py-3 bg-amber-400 rounded-lg active:scale-105 disabled:opacity-50'
       >
        Pre
      </button>
  )
}

export default PreBtn
