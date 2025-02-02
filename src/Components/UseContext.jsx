import React, { useContext } from 'react'
import { Data, Data1 } from './ContextAPI'

const UseContext = () => {
    const UserName = useContext(Data);
    const Age = useContext(Data1);

  return (
    <div>
        <h1>Name: {UserName}</h1>
        <h1>Age: {Age}</h1>
    </div>
  )
}

export default UseContext