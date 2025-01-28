import React from 'react'


const StyleCard = (props) => {
    const style = { backgroundColor: 'lightblue', borderRadius: '10px', color: 'tomato'}
  return (
    <div>
        <h1 style={style}>{props.text}</h1>
    </div>
  )
}

export default StyleCard