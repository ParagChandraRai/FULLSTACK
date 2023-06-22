import React, { Component, useState } from 'react'

const Count =()=>{
    const[count,setcount]=useState(0);
    
   
    return (
      <div>

        <h1>INCREMENT COUNT</h1>
        <h2>Count:{count}</h2>
        
      </div>
    )
  };
export default Count;
