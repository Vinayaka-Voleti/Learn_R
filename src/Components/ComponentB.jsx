import React from 'react'
import { Data } from './ContextAPI'
const ComponentB = () => {
  return (
    <div>

        <Data.Consumer>
            {
                (n)=>{
                    return <h1>{n}</h1>
                }    
            }

        </Data.Consumer>
    </div>
  )
}

export default ComponentB