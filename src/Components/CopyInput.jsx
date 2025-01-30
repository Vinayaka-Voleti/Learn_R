import React from 'react'
import { useState } from 'react'
import Copy_Popup from './Copy_Popup';


const CopyInput = () => {

  const [inputValue, setInputValue] = useState('');
  const [isCopied, setIsCopied]= useState(false);

  const handleCopy = ()=>{
    navigator.clipboard.writeText(inputValue).then(()=>{
      setIsCopied(true)
      setTimeout(() => {
        setIsCopied(false)
      }, 2000);
    })
  }

  return (
    <div>
      <h1>Text :{inputValue}</h1>
        <input type="text" placeholder='Enter text to be copied :' value={inputValue} onChange={(e)=> {setInputValue(e.target.value)}} />
        <button onClick={handleCopy}>Copied</button>
        <Copy_Popup copied={isCopied}/>
    </div>
  )
}

export default CopyInput