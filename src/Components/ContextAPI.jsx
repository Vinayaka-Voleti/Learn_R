import React from 'react'
import { createContext } from 'react'
import ComponentB from './ComponentB';
import ComponentC from './ComponentC';

export const Data = createContext();
export const Data1 = createContext();


const ContextAPI = () => {
    const name = "Vamsi"
    const age = 18

    

  return (
    <div>
        <Data.Provider value={name}>
        <Data1.Provider value={age}>
            <ComponentB/>
            <ComponentC/>
        </Data1.Provider>
        </Data.Provider>
    </div>
  )
}

export default ContextAPI