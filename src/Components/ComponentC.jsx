import React from 'react'
import { Data, Data1 } from './ContextAPI'

const ComponentC = () => {
  return (
    <div>
        <Data1.Consumer>
            {
                (age)=>{
                    return <h1>{age}</h1>
                }
            }
        </Data1.Consumer>
    </div>
  )
}

export default ComponentC