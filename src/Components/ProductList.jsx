import React from 'react'
const products = [
    {id: 1, name: "Phone", price: "$699"},
    {id: 2, name: "Laptop", price: "$120"},
    {id: 3, name: "HeadPhones", price: "$199"}

]


const ProductList = () => {
  return (
    <div>
        {products.map((p)=>(
            <ul key={products.id}>
                <li>{p.id}</li>
                <li>{p.name}</li>
                <li>{p.price}</li>
            </ul>
        ))}
    </div>
  )
}

export default ProductList