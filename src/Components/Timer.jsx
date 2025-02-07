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
          // setCount(countTimer.current)
          

        }
      },[])

  return (
    <div>
        <h1>Timer : {count} seconds</h1>
        <button onClick={()=>clearInterval(countTimer.current)}>Stop Time</button>
        <button onClick={()=>setInterval(()=>{setCount(p=>p+1)},1000)}>Restart</button>
    </div>
  )
} 

export default Timer