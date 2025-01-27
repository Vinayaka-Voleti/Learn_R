import React from 'react'
const Product = {
    name : "Laptop",
    price : 1200,
    availability : "available"
}

const ProductInfo = () => {
  return (
    <div>
        <p>{Product.name}
        {Product.price}
        {Product.availability}</p>
    </div>
    )
}

export default ProductInfo