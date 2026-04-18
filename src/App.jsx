 import React, { useEffect } from 'react'
 import axios from "axios";
import { useState } from 'react';
import GallerySection from './component/GallerySection/GallerySection'
import BtnSection from './component/buttonSection/BtnSection'
 
 const App = () => {

  const [userData, setUserData]=useState([])
  const [index, setIndex]= useState(1)

  const page=[1,2,3,4,5]

    const getData= async()=>{
      const res =await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`)
      setUserData(res.data)      
      
    }
    useEffect(function(){
    getData()    
    },[index])

   return (
    <div className=' px-8 py-5'>
      {userData.length === 0 ? (
          <div className=' h-[100vh] flex justify-center items-center text-gray-500 text-xl'>Loading...</div>
        ) : (
          <>
       <GallerySection userData={userData} />
       <BtnSection index={index} setIndex={setIndex} setUserData={setUserData} page={page}/>
       </>
        )}
    </div>
   )
 }
 
 export default App
 