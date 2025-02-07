import React, { useRef } from 'react'

const FocusInput = () => {
    const InputField = useRef(null)
  return (
    <div>
        <input type="text" ref={InputField} />
        <button onClick={()=>{InputField.current.focus()}}>FOCUS</button>
    </div>
  )
}

export default FocusInput