import React from 'react'


const Weather = (props) => {
  if(props.temp <15){
    return <h1>Its cold outside</h1>
  }
  else if (props.temp >=15 && props.temp <25){
    return <h1>Its nice outside</h1>
  }
  else if (props.temp>25){
    return <h1>Its hot outside</h1>
  }
}

export default Weather