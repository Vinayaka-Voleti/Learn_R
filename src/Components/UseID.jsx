// useId hook is used for assigning unique id to the dom elements dynamically.

import React, { useId } from 'react'

const UseID = () => {
    const id = useId(); // initialization od useId hook
  return (
    <div>
        <label htmlFor={`${id}-email`}>Email: </label>
        <input type="email" id={`${id}`} />

        <label htmlFor={`${id}-password`}>Password: </label>
        <input type="password"  id={`${id}-password`} />
    </div>
  )
}

export default UseID