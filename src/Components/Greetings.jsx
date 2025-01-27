import React from 'react'
 const GreetMessage = "Hello World"
 const CurrentD = new Date();

const Greetings = () => {
  return (
    <div>
        <h1>{GreetMessage}</h1>
        <p>Date -{CurrentD.getDate()} </p>
    </div>
    )
}

export default Greetings