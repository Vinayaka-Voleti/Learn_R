import React, { useRef } from 'react'

const UseRef = () => {
    const input = useRef(null);

    const onFocus = ()=>{
        input.current.focus();
        input.current.value = "Vinayaka"

    }

  return (
    <div>
        <input type="text" ref={input} />
        <button onClick={(()=> onFocus())}>Focus</button>
    </div>
  )
}

export default UseRef