import React from 'react'
const CurrentDate = new Date();

const Footer = () => {
  return (
    <div>
        <p>
        Copyright &copy; {CurrentDate.getFullYear()};
        </p> 
    </div>
  )
}

export default Footer