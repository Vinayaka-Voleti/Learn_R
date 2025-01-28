import React from 'react'
//  const GreetMessage = "Hello World"
//  const CurrentD = new Date();
 
 const Greetings = (props) => {
  return props.morn?(<h1>Good Morning</h1>):(<h1>Good Afternoon</h1>)
  // return (
  //   <div>
  //       <h1>{GreetMessage}</h1>
  //       <p>Date -{CurrentD.getHours()} </p>
  //   </div>
  //   )
}

export default Greetings