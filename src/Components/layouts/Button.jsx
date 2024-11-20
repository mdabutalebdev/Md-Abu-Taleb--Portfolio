import React from 'react'

const Button = ({text, className}) => {
  return (
     <button className={`border-[2px] border-primary py-2 px-4 hover:bg-primary hover:text-black rounded-lg  ${className}`}>{text}</button>
  )
}

export default Button