import React, { useState } from 'react'

const Comp1 = ({counter, funCountadd, funCountsub}) => {

  const handelClickincrement =()=> funCountadd();
  const handelClickdecrement =()=> funCountsub();

  return (
    <div>
        <h1>{counter}</h1>
        <button onClick={handelClickincrement}>+</button>
        <button onClick={handelClickdecrement}>-</button>

    </div>
  )
}

export default Comp1