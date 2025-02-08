import React, { useEffect, useRef, useState } from 'react'

const Timer = () => {
  const [count, setCount] = useState(0);
  const Time = useRef(null)
  useEffect(()=>{
    Time.current = setInterval(()=>{
      setCount(prev => prev + 1);
    }, 1000);
    
    return ()=> {
      clearInterval(Time.current)
    }
  },[]);
  return (
    <div>
      <h1>TImer: {count} seconds</h1>
      <button onClick={()=> clearInterval(Time.current)}>Stop Timer</button>
    </div>
  )
}

export default Timer