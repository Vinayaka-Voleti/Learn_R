import React, {useReducer} from 'react'

const initialState ={ count : 0};

const reducer = (state, action)=>{
    switch (action.type) {
        case "increment":
            return { ...state, count: state.count + 1}
        case "decrement":
            return { ...state, count: state.count - 1}
        case "clear":
            return { ...state, count: 0}
        default:
            break;
    }
}
const UseReducer = () => {


    const [state, dispatch] = useReducer(reducer, initialState);

    
  return (
    <div>
        <h1>{state.count}</h1>
        <button onClick={()=> dispatch({type: "increment"})}>+</button>
        <button onClick={()=> dispatch({type: "decrement"})}>-</button>
        <button onClick={()=> dispatch({type: "clear"})}>clear</button>

    </div>
  )
}

export default UseReducer