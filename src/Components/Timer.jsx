import React, { useEffect, useRef, useState } from 'react'

const Timer = () => {
    const [count, setCount] = useState(0);
    const countTimer = useRef(null);
    useEffect(()=>{
        countTimer.current = setInterval(()=>{
            setCount((prevCount) => prevCount + 1 );
        },1000)
        return ()=>{
          clearInterval(countTimer.current)
        }
      },[])

  return (
    <div>
        <h1>Timer : {count} seconds</h1>
    </div>
  )
} 

export default Timer