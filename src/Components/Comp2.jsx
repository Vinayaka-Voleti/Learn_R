import React, { useEffect } from 'react'
import { useState } from 'react';

const Comp2 = () => {

  const [name, setName] = useState(()=>{
    const GetName = localStorage.getItem('name');
    return GetName? JSON.parse(GetName):""
  })
  useEffect(()=>{
    localStorage.setItem('name', JSON.stringify(name))
  }, [name])
  const handleChange = (event)=>{
    setName(event.target.value);
  }
  const handleClear=()=>{
    setName("");
  }

  return (
    <div>
        <h1>Your Name: {name}</h1>
        <input type="text" value = {name} placeholder='Enter Name: ' onChange={handleChange} />
        <button onClick={handleClear}>Clear Name</button>
    </div>
  )
}

export default Comp2