import React from 'react'

const Person = (props) => {
  return (
    <div>
        <h2>{props.n}</h2>
        <p>{props.a}</p>
    </div>
  )
}

export default Person