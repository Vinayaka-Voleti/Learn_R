import React from 'react'

const Product = ({names, price}) => {
  return (
    <div>
        <h2 >{names}</h2>
        <p> ${price}</p>
    </div>
  )
}

export default Product