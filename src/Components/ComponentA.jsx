import React from 'react'
import ComponentB from './ComponentB'

const ComponentA = () => {
    const name = "Vinayaka"
  return (
    <div>
        <ComponentB name = {name}/>
    </div>
  )
}

export default ComponentA