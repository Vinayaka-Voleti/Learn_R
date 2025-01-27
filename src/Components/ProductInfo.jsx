import React from 'react'
const Product = {
    name : "Laptop",
    price : 1200,
    availability : "available"
}

const ProductInfo = () => {
  return (
    <div>
        <p>Name: {Product.name}</p>
        <p>Price: ${Product.price}</p>
        <p>Availability: {Product.availability}</p>
    </div>
    )
}

export default ProductInfo