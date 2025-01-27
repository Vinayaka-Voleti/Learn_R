import React from 'react'

const User = (props) => {
  return (
    <section>
        <img src={props.img} alt={props.name} width={200}/>
        <h1>Name: {props.name}</h1>
        <h1>Age: {props.age}</h1>
        <h1>isMarried: {props.isMarried}</h1>
        <h1>Hobbies: {props.hobbies}</h1>
    </section>
  )
}

export default User