import React, { useReducer, useState } from 'react'
import {UserReducer,initialState} from '../Components/UserReducer';

const Reducer = () => {

  const [state, dispatch]=useReducer(UserReducer, initialState);
  const [num , setNUm] = useState(0);

  return (
    <div>
      <h1>Number: {state.count}</h1>
      <button onClick={()=> dispatch({type: "increment"})}>+</button>
      <button onClick={()=> dispatch({type: "decrement"})}>-</button>
      <input type="text" value={num} onChange={(e)=>setNUm(e.target.value)} />
      <button onClick={()=>{ dispatch({type: "addByValue", payload: Number(num)}) 
                            setNUm(0)}}>Addition</button>
      <button onClick={()=> {dispatch ({type: "subByValue" , payload : +num})
                            setNUm(0)}}>Substract</button>

    </div>
  )
}

export default Reducer