import React, { useState, useEffect } from 'react'

const UsingEffect = () => {
    const [count, setCount] = useState(0)

    useEffect(()=>{
        console.log('Triggered UseEffect')
        document.title = `Number ${count}`
    }, [count])

  return (
    <div>
        <h1>Number: {count}</h1>
        <button onClick={()=> setCount(count+1)}>+</button>
        <button onClick={()=> setCount(count-1)}>-</button>
        <button onClick={()=> setCount(0)}>Clear</button>


    </div>
  )
}

export default UsingEffect